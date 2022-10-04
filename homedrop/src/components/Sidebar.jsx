import React from "react";
import styles from "./sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Overview</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<FiShoppingCart />}</div>
          <div className={styles.name}>Sales</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Purchases</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Inventory</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Marketing</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Analytics</div>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.icon}>{<AiOutlineHome />}</div>
          <div className={styles.name}>Staff</div>
        </div>
    </div>
  );
};

export default Sidebar;
