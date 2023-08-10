import { Author, Categories, Welcome } from '@/component';
import book from '@/public/bookss';
import styles from '@/styles/books.module.css'
import { useState, useEffect } from 'react';

interface Book {
  id: number;
  title: string;
  image: string;
  author: string;
  desc: string;
}

interface bro {
  brr: Book
}


const Books = ({brr}:bro) => {
  const [bookdetail, setbookdetail] = useState(brr)
  const bookinfo = (id:number) => {
    let details = book.filter((e) => e.id === id);
    setbookdetail(details[0])
    console.log(bookdetail)
}
  const [desktop,setdesktop] = useState(false)
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
    return ( 
        <div className={styles.books}>
          <div className={styles.headflex}>
            <Welcome header="Keep Reading the story" button='Start reading' />
            {desktop ? <Author detail = {bookdetail}/> : null}
          </div>
          <Categories desktop = {desktop} cate='chinua achebe'  bookinfo={bookinfo}/>
          <Categories desktop = {desktop} cate='popoola samuel'  bookinfo={bookinfo}/>
          <Categories desktop = {desktop} cate='chinua achebe'  bookinfo={bookinfo}/>
          <Categories desktop = {desktop} cate='popoola samuel'  bookinfo={bookinfo}/>
        </div>
     );
}
 
export default Books;