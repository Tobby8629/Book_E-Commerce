import { Scheduled, Scheduledpage } from "@/component";
import Week from "@/component/schedule/Week";
import styles from "@/component/schedule/scheduled.module.css"
import scheduled from "@/public/schedule";
import { useState } from "react";

const ScheduledBook = () => {
  let dee = scheduled.map((e)=> {
  const ree = Date.parse(e.date) + 10**8   
  const newdate = new Date(ree)
   return({...e,date: newdate})
   })
  const newarr = dee.filter((e)=>
  e.date.getDay() === new Date().getDay() && e.date.getDate() === new Date().getDate()
)
    return (
        <div className={styles.schedule}>
          <Week />
          <Scheduledpage arr = {newarr}/>
        </div>
     );
}
 
export default ScheduledBook;