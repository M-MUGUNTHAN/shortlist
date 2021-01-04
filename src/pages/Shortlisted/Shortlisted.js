import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { getAcceptedList } from '../../utils/candidate'

function Shortlisted(props) {
    const [shortlist,setshortlist]=useState(null)
    useEffect(()=>{
   const list=getAcceptedList();
   setshortlist(list)
    },[])
    if(shortlist===null){
        return <div>Loading...</div>
    }
    return (
        <div>
           {shortlist&&shortlist.length?
             shortlist.map(item=>{
                 return(
                     <Card {...item} />
                 );
             }):
             <div>
                 No Candidate found
             </div>
         } 
        </div>
    )
}

export default Shortlisted
