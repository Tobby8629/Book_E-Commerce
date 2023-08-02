import Days from "./date";

const Week = () => {
    const week = Days()
    return ( 
        week.map((e)=>(
          <li>{e.day} || {e.date}</li>
        ))
     );
}
 
export default Week;