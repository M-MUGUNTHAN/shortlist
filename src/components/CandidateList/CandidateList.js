import React, { useEffect } from 'react'

const CandidateList = (props) => {
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
            })
    },[])
    return (
       <>
       {props.children}
       </>
    )
}

export default CandidateList
