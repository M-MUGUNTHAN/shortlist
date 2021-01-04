import React, { useEffect, useState } from 'react'

const CandidateList = (props) => {
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
            fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then(response=>response.json())
            .then(data=>{
                data=data.map(item=>{
                    return(
                        {
                            ...item,
                            shortlisted:false,
                            rejected:false,
                        }
                    );
                })
             localStorage.setItem("candidateList",JSON.stringify(data))
             setLoading(false);
            })
    },[])
    if(loading===true){
        return <div>Loading...</div>
    }
    return (
       <>
       {props.children}
       </>
    )
}

export default CandidateList
