import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import { getCandidatesList, getRejectedList } from '../../utils/candidate'

function Rejected(props) {
    const [rejectedList,setRejectedList]=useState(null)
    useEffect(()=>{
   const list=getRejectedList();
   setRejectedList(list);
    },[])
    if(rejectedList===null){
     return<div>Loading...</div>
    }
    return (
        <div>
           {rejectedList&&rejectedList.length?
             rejectedList.map(item=>{
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

export default Rejected
