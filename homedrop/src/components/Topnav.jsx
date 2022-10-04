import React from "react";
import styles from "./topnav.module.css";
import { FaBars } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
const Topnav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftPart}>
        <div className={styles.bar}>
          <FaBars />
        </div>
        <div className={styles.logo}>
          <div>SM</div>
        </div>
        <div className={styles.name}>Swastik Marketing</div>
      </div>
      {/* middle search bar */}
      <div className={styles.middlePart}>
        <input type="text" />
      </div>

      {/* rightside */}
      <div className={styles.rightPart}>
        <div className={styles.connected}>
          <div>• Connected</div>
        </div>
        <div className={styles.questionmark}>
          <BsQuestionCircle />
        </div>
        <div className={styles.bell}>
          <BsBell />
        </div>
        <div className={styles.kg}>
          <div>KG</div>
        </div>
        <div className={styles.downarrow}>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
