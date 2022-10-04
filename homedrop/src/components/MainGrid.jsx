import React from 'react'
import styles from "./maingrid.module.css";
import Navbar from './Navbar';
import Grid from './Grid';
const MainGrid = () => {
  return (
      <div className={styles.maingrid}>
          <Navbar />
          <Grid/>
    </div>
  )
}

export default MainGrid