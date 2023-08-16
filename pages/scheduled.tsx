import { Scheduledpage } from "@/component";
import pagination from "@/component/pagination";
import Week from "@/component/schedule/Week";
import styles from "@/component/schedule/scheduled.module.css"
import scheduled from "@/public/schedule";
import converter from '@/component/converter'
import { useEffect, useState } from "react";

const ScheduledBook = () => {
  const [desktop,setdesktop] = useState(false)
  const[page,setpage] = useState(0)
  useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setdesktop(false);
          } else {
            setdesktop(true);
          }
        };
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

  const dee = converter(scheduled)
  const newarr = dee.filter ((e: {date: Date})=>
  e.date.getDay() === new Date().getDay() && e.date.getDate() === new Date().getDate()
)

const{arr=[],loop}=pagination(desktop,1,1,newarr,page)

    return (
        <div className={styles.schedule}>
          <Week />
          {arr.length > 0 ? 
          <>
          <Scheduledpage arr = {arr}/>
          <div className={styles.btns}>
           {loop.length > 1 && loop.map((e)=><div key={e} className={styles.btn} onClick={()=> setpage(e-1)}></div>)}  
          </div>
          </>
          : 
          <div className={styles.else}>
            <h3> You Haven't Schedule a Book on This day </h3>
            <button>
             <a href="/books">schedule a book</a> 
            </button>
          </div>}
        </div>
     );
}
 
export default ScheduledBook;