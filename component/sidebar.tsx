import React from 'react'
import styles from '@/styles/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

interface SidebarProps {
  side: boolean;
}

function Sidebar({ side }: SidebarProps) {
  return (
    <nav id ='nav' className={side ? styles.sideoff : styles.sideon}>
      <div className={styles.wrapper}>
      <div className={styles.all}>
        <div className={styles.logo}>
          <img src='logo.png' alt='logo' />
        </div>
        <div className={styles.menu}>
          <div><img src='home.png' alt='home' /></div>
          <div><img src='books.png' alt='books' /></div>
          <div><img src='schedule.png' alt='schedule' /></div>
          <div><img src='vector.png' alt='Vector' /></div>
          <div><img src='settings.png' alt='settings' /></div>
        </div>
      </div>
      <div className={styles.logout}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
      </div>
    </nav>
  )
}

Sidebar.propTypes = {
  side: PropTypes.bool.isRequired
};

export default Sidebar
