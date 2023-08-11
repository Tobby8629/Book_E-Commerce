import Days from "./date";
import styles from "@/styles/popular.module.css"

const Week = () => {
    const week = Days()
    const day = new Date().getDay()
    const month= new Date().getDate()
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    return (
      <div className={styles.wrap}>
      <h4>Scheduled books</h4>
      <div className='week'>
        {week.map((e)=>(
         <a
         href={`/details/${e.day}/${e.date}`}
         key={e.id}
         className={day === e.day && month === e.date ? "highlight" : ""}
       >
            <p className={e.day == 0 || e.day == 6 ? 'weekend' : ''}>{days[e.day]}</p>
            <p className={e.day == 0 || e.day == 6 ? 'weekend' : ''}>{e.date}</p>
          </a>
        ))}
      </div> 
      </div>
     );
    
} 

// Week.prototype = {
//   checkdate: PropType.func.isRequired,
// }
 
export default Week;