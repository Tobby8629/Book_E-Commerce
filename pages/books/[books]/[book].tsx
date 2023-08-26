import React from 'react'
import styles from '@/styles/acc.module.css'
import { useRouter } from 'next/router'
import book from '@/public/bookss'


function books() {
  const id = useRouter().query.book
  const arr = book.filter((e)=> e.id.toLocaleString() == id)
  console.log(id)
  return (
    <div className={styles.wraps}>
      {arr.map((e)=>(
        <>
          <h5 className={styles.title}>{e.title}</h5>
          <h6 className={styles.author}>Author: {e.author}</h6>
          <div className={styles.split} key={e.id}>
            <div className={styles.image}>
              <img src={e.image} alt={e.title} />
            </div> 
             {/* <div className={styles.text}>
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
            </div> */}
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
            <div className={styles.btns}>
              <button>schedule</button>
              <button>download</button>
            </div>
          </div>
        </div>
        </>
        ))}
    </div>
  )
}

export default books