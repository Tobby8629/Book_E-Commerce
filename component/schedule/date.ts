export default function Days() {
    const currentDate = new Date();
    const next7Days = [];
    const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      let newdate = {day: day[date.getDay()], date:date.getDate()}
      next7Days.push(newdate);
    }
  
    return next7Days;
  }
  
  