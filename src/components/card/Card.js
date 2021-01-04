import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import styles from "./card.module.css";

const Card = ({Image,name,id,isClickable}) => {
  const history= useHistory();
  const handleClick=()=>{
      if(isClickable===true){
          history.push(`/${id}`);
      }
  }
    return (
        <div className={styles.container} key={id} onClick={handleClick}>
           <img className={styles.image} src={Image}/>
           <div>{name}</div> 
        </div>
    )
}

export default Card;
