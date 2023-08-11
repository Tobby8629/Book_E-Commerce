import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './search.module.css'
import PropTypes from 'prop-types';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface SearchProps {
  free: (event: string) => void;
  off: boolean;
}

const Search = ({ free, off}: SearchProps) => {
    
    return ( 
     <div className={styles.search}>
        <label className={styles.inputsearch} >
          {off ? <FontAwesomeIcon icon={faSearch}/> : null }
          <input placeholder="search book name, author, edition"  onChange={(event)=>free(event.target.value)}  />
        </label>
        <div className={styles.userdata}>
          <div className={styles.user}>
            <div className={styles.image}>
              <img src='/sam.jpg' />
            </div>
            <p>Samuel Popoola</p>
          </div>
          <div className={styles.svg}>
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
     </div>
    );
}

Search.propTypes = {
  free: PropTypes.func.isRequired,
  off: PropTypes.bool.isRequired
};
 
export default Search;