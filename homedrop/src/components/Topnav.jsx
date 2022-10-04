import React from 'react'
import styles from './topnav.module.css'
const Topnav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftPart}></div>
      <div className={styles.middlePart}></div>
      <div className={styles.sidePart}></div>
    </div>
  )
}

export default Topnav