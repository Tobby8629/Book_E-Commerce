import Week from '@/component/schedule/Week'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/component/schedule/scheduled.module.css'
import { Scheduledpage } from '@/component'
import scheduled from '@/public/schedule'


function details() {
  
  const {date, day}= useRouter().query
  let dee = scheduled.map((e)=> {
   const ree = Date.parse(e.date) + 10**8   
  const newdate = new Date(ree)
  return({...e,date: newdate})
  })

  let newarr = dee.filter((e)=> 
  e.date.getDay().toLocaleString() === day && e.date.getDate().toLocaleString() === date
  )

  return (
    <div className={styles.schedule}>
      <Week />
      <Scheduledpage arr = {newarr}/>
    </div>
  )
}

export default details