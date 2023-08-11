import Week from '@/component/schedule/Week'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/component/schedule/scheduled.module.css'
const scheduled = [
  {
    id:1,
    book: "tears of the sun",
    date: "2023-08-11",
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
    </div>
  )
}

export default details