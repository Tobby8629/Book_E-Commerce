const converter = (scheduled) => {
  let dee = scheduled.map((e)=> {
    const ree = Date.parse(e.date) + 10**8   
    const newdate = new Date(ree)
     return({...e,date: newdate})
    })
  return dee
}

export default converter