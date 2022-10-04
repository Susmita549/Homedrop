import React from 'react'
import styles from "./mainbody.module.css"
import Sidebar from './Sidebar';
import Body from './Body';
const Mainbody = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Body />
    </div>
  );
}

export default Mainbody