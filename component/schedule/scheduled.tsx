import React from 'react';
import {motion} from 'framer-motion'
import styles from '@/styles/popular.module.css'
import schedule from '@/public/schedule';

function scheduled() {
  const date = new Date();

  const newarr = schedule.map((e) =>{
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
                <p>{e.title} || {e.id}</p> 
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