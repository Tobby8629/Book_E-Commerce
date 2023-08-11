import React from 'react'
import styles from './scheduled.module.css'

interface arry {
  id: number;
  author: string;
  date: Date;
  title: string;
  desc: string;
  image: string
 }


interface arrry {
  arr: arry[]
}

function scheduledpage({arr}: arrry) {
  return (
    <div>
      {arr.map((e)=>(
        <div key={e.id}>
           <div className={styles.image}>
              <img src={e.image} alt={e.title} />
           </div> 
           <div>
             <h4>{e.title}</h4>
             <h6>{e.author}</h6>
             <p>{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default scheduledpage