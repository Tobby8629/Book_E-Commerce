import book from '@/public/bookss'
import React from 'react'
import styles from '@/styles/books.module.css'
import PropTypes from 'prop-types'

interface categories {
  desktop: boolean;
  cate: string;
  bookinfo: (id:number) => void 
}

function categories({cate,desktop, bookinfo}: categories) {
  let books = book.filter((e)=> e.author === cate)
  desktop ? books : books.splice(3,books.length)
  return (
    <div className={styles.catewrap}>
       <div className={styles.catehead}>
         <h4>{cate} Books</h4>
         <a href={cate}>show all</a>
       </div>
       <div className={styles.catebooks}>
        {books.map((book)=>(
          <div key={book.id}>
            <div className={styles.cateimage} onMouseOver={()=>bookinfo(book.id)}>
              <img src={book.image} />
            </div>
            {desktop ? null :
             <div className={styles.mhover}>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>{book.desc.split(" ").slice(0,10).join(' ')}</p>
            </div>}
          </div>
        ))}
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