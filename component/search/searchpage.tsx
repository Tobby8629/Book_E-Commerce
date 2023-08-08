import styles from "./search.module.css"
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

interface ReelItem {
    id: number;
    image: string;
    title: string;
    author: string
  }

interface Searchpage {
    reel: ReelItem[];
  }
const Searchpage = ({reel}: Searchpage) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          AOS.init({duration: 1500}); // Initialize AOS on the client side
        }
      }, []);
    return (
     <div className={styles.searchpage} data-aos = "zoom-out">
     {reel.length > 0 ? 
       reel.map((e) => (
        <div key={e.id} className={styles.column}>
          <div className={styles.image}>
            <img src={e.image} alt={e.title}/>
          </div>
         <h3>{e.title}</h3>
         <p>{e.author}</p>
        </div>
       )) :
       <div className={styles.sorry}>
         <h3>Sorry! Couldn't find a book or author with such name....</h3>
      </div>
     }
     </div>
    );
}

Searchpage.propTypes = {
    reel: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default Searchpage;
