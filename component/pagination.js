const pagination = (desktop, desk, mob, books, page) => {
    let num = desktop ? desk:mob
    let start = page * num
    let end = start + num
    let arr = books.slice(start,end);
    let loopnum = books.length/num
    let loop = []
    for (let index = 1; index <= loopnum; index++) {
      loop.push(index)
    }
  return { arr,loop}
}

export default pagination