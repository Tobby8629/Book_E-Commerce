import React from 'react'
import {motion} from "framer-motion"
import styles from '@/styles//popular.module.css'
import PropTypes, { array } from 'prop-types'

interface popularProps {
    header: string;
    array: Array<any>;
    length: Number;
  }
function popular({header,array,length}: popularProps) {

  return (
    <div className={styles.popular}>
      <h4>{header}</h4>
      <motion.div className={styles.parent}>
        <motion.div
          drag="x"
          className={styles.sub}
          dragConstraints = {{right: 0, left: -length}}>
            {array.map((e)=>(
              <motion.div key={e.id} className='image'>
                <img src={e.image} alt={e.title} />
              </motion.div>
            ))}
        </motion.div>  
      </motion.div>
    </div>
  )
}

popular.propTypes = {
    header: PropTypes.string.isRequired,
    array: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
  };

export default popular