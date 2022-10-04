import React from 'react'
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div>All</div>
        <div>Active</div>
        <div>Inactive</div>
        <div>Draft</div>
      </div>
      <div className={styles.select}>
        <div>Sort:</div>
        <div>
          <select>
            <option value="">Date Created</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar