import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { acceptCandiate, getCandidate, rejectCandiate } from '../../utils/candidate';
import styles from "./profile.module.css";
function Profile(props) {
    const {id}=useParams();
    const[candidate,setCandidate]=useState(null);
    useEffect(()=>{
    const cand= getCandidate(id);
    if(cand){
      return setCandidate(cand)
    }
      setCandidate("invalid")
    },[])
  const handleAccept=async(idx)=>{
  const done=await acceptCandiate(idx);
  if(done){
      props.history.push("/")
  }
  }
  const handleReject=async(idx)=>{
    const done=await rejectCandiate(idx);
    if(done){
        props.history.push("/")
    }
    }
    if(candidate){
        return (
            <div>
               <img className={styles.image} src={candidate.Image}/>
               <div>{candidate.name}</div>
               <div className={styles.buttonWrapper}>
                   <div onClick={()=>handleAccept(id)} className={`${styles.button} ${styles.shortlist} `}>Shortlist</div>
                   <div onClick={()=>handleReject(id)} className={`${styles.button} ${styles.reject} `}>Reject</div>
               </div>
            </div>
        )
    }
    if(candidate==="invalid"){
        <div>
            404 page not found
        </div>
    }
    return <div>Loading...</div>
}

export default Profile
