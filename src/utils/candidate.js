export const getCandidatesList=()=>{
    let list=localStorage.getItem("candidateList")
    let parsedList=null;
    if(list){
        parsedList=JSON.parse(list);
    }
 return parsedList;
}

export const getCandidate=(id)=>{
    let list=getCandidatesList();
    if(list&&list.length){
        const cand=list.find(item=>item.id===id);
        if(cand){
        return cand
        }
    }
    return null;
}
export const acceptCandiate=(id)=>{
    return new Promise(resolve=>{
        const list=getCandidatesList();
        let candidateIndex=-1;
        if(list&&list.length){
          candidateIndex=list.findIndex((item)=>item.id===id);
          if(candidateIndex>=0){
              list[candidateIndex].shortlisted=true;
              list[candidateIndex].rejected=false;
          }
        }
        localStorage.setItem("candidateList",JSON.stringify(list))
        resolve(true)
    })
}

export const rejectCandiate=(id)=>{
    return new Promise(resolve=>{
        const list=getCandidatesList();
        let candidateIndex=-1;
        if(list&&list.length){
          candidateIndex=list.findIndex((item)=>item.id===id);
          if(candidateIndex>=0){
              list[candidateIndex].shortlisted=false;
              list[candidateIndex].rejected=true;
          }
        }
      localStorage.setItem("candidateList",JSON.stringify(list))
      resolve(true)
    })
 }

 export const getRejectedList=()=>{
   const list=getCandidatesList();
   if(list&&list.length){
      const filter=list.filter(item=>item.rejected===true)
      return filter;
   }
   return [];
 }

 export const getAcceptedList=()=>{
    const list=getCandidatesList();
    if(list&&list.length){
       const filter=list.filter(item=>item.shortlisted===true)
       return filter;
    }
    return [];
  }