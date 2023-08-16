import book from '@/public/bookss'
import React, { useState } from 'react'
import styles from '@/styles/books.module.css'
import pagination from '../pagination'
import PropTypes from 'prop-types'

interface categories {
  desktop: boolean;
  cate: string;
  bookinfo: (id:number) => void 
}

function categories({cate,desktop, bookinfo}: categories) {
  let books = book.filter((e)=> e.author === cate)
  desktop ? books : books.splice(6,books.length)
  let [page, setpage] = useState(0)
  const{arr,loop} = pagination(desktop,5,3,books,page)
  

  return (
    <div className={styles.catewrap}>
       <div className={styles.catehead}>
         <h4>{cate} Books</h4>
         <a href={cate}>show all</a>
       </div>
       <div className={styles.catebooks}>
        {arr.map((book: {
          id: number,
          image: string,
          title: string,
          author: string
        })=>(
          <div className={styles.each} key={book.id}>
            <div className={styles.cateimage} onMouseOver={()=>bookinfo(book.id)}>
              <img src={book.image} />
            </div>
            {desktop ? null :
             <div className={styles.mhover}>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>}
          </div>
        ))}
       </div>
       <div className={styles.btns}>
         {loop.length > 1 && loop.map((e)=><div key={e} className={styles.btn} onClick={()=> setpage(e-1)}></div>)}  
       </div>
    </div>
  )
}

categories.prototype = {
  desktop: PropTypes.bool.isRequired,
  cate: PropTypes.string.isRequired,
  bookinfo: PropTypes.func.isRequired
}

export default categories