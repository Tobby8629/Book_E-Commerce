import pagination from '@/component/pagination';
import scheduled from '@/public/schedule';
import styles from '@/styles/author.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const author = () => {
  const {author} = useRouter().query
  const books = scheduled.filter((e)=>e.author === author)
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
  const {arr,loop} = pagination(desktop,5,3,books,page)
  const user = books[0]

  return ( 
    <div className={styles.author}>

      {user && 
      <div className={styles.details}>
        <div className={styles.mob}>
          <div className={styles.image}>
            <img src={user.image} alt= {user.author} />
          </div>
          <h5 className='mobile'>{user.author}</h5>
        </div>
        <div className={styles.text}>
          <h5 className='desktop'>{user.author}</h5>
          <div className={styles.about}>
            <h5>About {user.author}</h5>
            <p>{user.desc}</p>
          </div>
        </div>
      </div>}

      <>
        {author && <h5 className={styles.head}>Books by {user.author}</h5>}
        <div className={styles.books}>
          {arr.map((e:{id:number,author: string, title: string, image: string, desc: string})=>(
          <a className={styles.autho} key={e.id} href={`/books/book/${e.id}`}>'
            <div className={styles.img}>
              <img src={e.image} alt={e.title} />
            </div>
            <div className={styles.bookdet}>
              <h5>{e.title}</h5>
            </div>
          </a>
          ))}
        </div>
      </>


      <div className={styles.btns}>
        {loop.length > 1 && loop.map((e)=><div key={e} className={styles.btn} onClick={()=> setpage(e-1)}></div>)}  
      </div> 


    </div>      
  );
}
 
export default author;