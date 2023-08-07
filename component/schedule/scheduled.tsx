import React from 'react';
import {motion} from 'framer-motion'
import styles from '@/styles/popular.module.css'

function scheduled() {
  const scheduled = [
    {
      id:1,
      book: "tears of the sun",
      date: "2023-08-07",
    },
    {
      id:2,
      book: "tears of the sun",
      date: "2023-08-01",
    },
    {
      id:3,
      book: "tears of the sun",
      date: "2023-08-07",
    },
    {
      id:4,
      book: "tears of the sun",
      date: "2023-08-07",
    },
    {
      id:5,
      book: "tears of the sun",
      date: "2023-08-07",
    },
    {
      id:6,
      book: "tears of the sun",
      date: "2023-08-07",
    },
  ]
  const date = new Date();
 
  const newarr = scheduled.map((e) =>{
   const timestamp = Date.parse(e.date) + 100000000;
   const newDate= new Date(timestamp);
   return({...e, date: newDate})
  }) 

  const arr = newarr.filter((e)=>(
   e.date.getDate()=== date.getDate() && 
   e.date.getMonth()===date.getMonth()&&
   e.date.getFullYear()===date.getFullYear() 
 ))
  
  return (
    <motion.div className={styles.parent}>
     <motion.div 
     className='sub subt'
     drag="x"
     dragElastic={0.5}
     dragConstraints ={{right: 0, left: -300 * arr.length}}
     >
         {arr.map((e)=>(
              <motion.div key={e.id} className='text'>
                <p>{e.book} || {e.id}</p> 
                <p>
                Lorem ipsum dolor sit amet consectetur. 
                 Vestibulum phasellus id ut amet eu.
                 ut commodo ut nulla vel eu. Nec dolor tellus et mauris urna at
                </p>
              </motion.div>
            ))}
     </motion.div>
    </motion.div>
  )
}

export default scheduled