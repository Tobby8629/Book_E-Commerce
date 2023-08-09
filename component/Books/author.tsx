import React, { useEffect } from 'react'
import styles from '@/styles/books.module.css'
import AOS from 'aos';

interface dee {
    id: number;
    title: string;
    image: string;
    author: string;
    desc: string;
  }

interface author {
  detail: dee;
}

function author({detail}:author) {
useEffect(() => {
    if (typeof window !== 'undefined') {
        AOS.init({duration: 1500}); 
    }
    }, []);
  return (
    <>
     {detail ? 
       <div className={styles.author} data-aos="fade-out">
       <div className={styles.wrapper}>
          <div className={styles.intro}>
            <div className={styles.image}>
              <img src={detail.image} alt={detail.title}  data-aos="fade-out"/>
            </div>
            <div className={styles.name}>
              <h4>{detail.author}</h4>
            </div>
          </div>
           <div className={styles.desc}>
             {detail.desc}
           </div>
       </div>
   </div> :
    <p style={{color: 'red'}}>hover on a book to show details</p> 
    }
    </>

   
  )
}

export default author