import React from 'react'

import styles from './body.module.css'
import MainGrid from './MainGrid';

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.subbody}>
        <div className={styles.product}>
          <div className={styles.nameDiv}>Products</div>
          <div className={styles.buttonDiv}>
            <button>Add Products</button>
          </div>
        </div>
        <div>
          <MainGrid/>
        </div>
      </div>
    </div>
  );
}

export default Body