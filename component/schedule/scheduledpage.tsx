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
    <div className={styles.wraps}>
      {arr.map((e)=>(
        <div key={e.id}>
          <div className={styles.split}>
            <div className={styles.image}>
              <img src={e.image} alt={e.title} />
            </div> 
             <div className={styles.text}>
             <div className={styles.up}>
               <h4>{e.title}</h4>
               <h6>{e.author}</h6>
               <p>{e.desc.split(' ').slice(0, 12).join(' ')}</p>
             </div>
             <div className={styles.down}>
               <div className={styles.left}>
                 <button>Start reading</button>
               </div>
               <div className={styles.right}>
                <div className={styles.icon}>
                  <img src='/download.png'/>
                </div>
                <div className={styles.icon}>
                  <img src='/free.png'/>
                </div>
                <div className={styles.icon}>
                  <img src='/flag.png'/>
                </div>
               </div>
            </div>
            </div>
          </div>
          <div className={styles.descdown}>
            <div className={styles.desc}>
              <h6>Description</h6>
              <p>{e.desc}</p>
            </div>
            <div className={styles.descpages}>
              <div className={styles.lang}>
                <h6>pages</h6>
                <p>English (usa, uk)</p>
              </div>
              <ul className={styles.paper}>
                <li>150 pages</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default scheduledpage