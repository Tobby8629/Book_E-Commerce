import React from 'react'
import styles from '@/styles/welcome.module.css'

function welcome() {
  return (
    <div className={styles.wrapper}>
      <h3>Happy reading, Tobby</h3>
      <p>Lorem ipsum dolor sit amet consectetur. 
        Vestibulum phasellus id ut amet eu.
        Ut commodo ut nulla vel eu. Nec dolor tellus et mauris urna at
      </p>
      <button>start reading</button>
    </div>
  )
}

export default welcome