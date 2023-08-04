export default function Days() {
    const currentDate = new Date();
    const next7Days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      let newdate = {day: date.getDay(), date:date.getDate(), id:i}
      next7Days.push(newdate);
    }
  
    return next7Days;
  }
  
  