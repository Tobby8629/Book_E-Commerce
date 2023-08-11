import React from 'react'
import styles from '@/styles/welcome.module.css'
import PropTypes from 'prop-types';

interface welcome {
  header: string;
  button: string;
}

function welcome({header, button}: welcome) {
  return (
    <div className={styles.wrapper}>
      <h3>{header}</h3>
      <p>Lorem ipsum dolor sit amet consectetur. 
        Vestibulum phasellus id ut amet eu.
        Ut commodo ut nulla vel eu. Nec dolor tellus et mauris urna at
      </p>
      <button>{button}</button>
    </div>
  )
}

welcome.propType = {
  header: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}
export default welcome