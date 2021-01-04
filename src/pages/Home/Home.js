import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { getCandidatesList } from '../../utils/candidate'
import styles from "../Profile/profile.module.css";
const Home = (props) => {
    const[candidates,setCandidates]=useState(null)
    const[search,setSearch]=useState("");
    useEffect(()=>{
        const candidateList=getCandidatesList();
        if(candidateList){
            setCandidates(candidateList);   
        }
        else{
            setCandidates([])
        }

    },[])
    useEffect(()=>{
     if(search){
       let patients = getCandidatesList();
       patients= patients.filter(function(e, i, a){
           if(e.name.toLowerCase().indexOf(search.toLowerCase())!==-1){
             return true
           }
            return false
        });
        setCandidates(patients)
     }
     else{
         const list=getCandidatesList();
         setCandidates(list)
     }
    },[search])
    if(candidates===null){
        return <div>Loading...</div>
    }
    return (
        <div style={{width:"!00%",margin:"auto"}}>
         <div>
             <input style={{height:"60px",width:"200px"}} value={search} onChange={({target:{value}})=>setSearch(value)}/>
         </div>
         {candidates&&candidates.length?
         <>
         <div className={styles.buttonWrapper}>
             <div onClick={()=>props.history.push("/shortlisted")} className={`${styles.button} ${styles.shortlist} `}>Shortlisted List</div>
             <div onClick={()=>props.history.push("/rejected")} className={`${styles.button} ${styles.reject} `}>Rejected List</div>
         </div>
         {
             candidates.map(item=>{
                 return(
                     <Card {...item} isClickable={true}/>
                 );
             })
         }
             </>
             :
             <div>
                 No Candidate found
             </div>
         } 
        </div>
    )
}

export default Home
