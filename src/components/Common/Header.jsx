import React from "react";

import styles from "./Header.module.scss";
import notification from "../../assets/images/notification.svg";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className={styles.headerMainContainer}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.headerLeft}>
          <li>Pull requests</li>
        </ul>
        <ul className={styles.headerRight}>
          <li className={styles.headerItem}>
            <img
              className={styles.notification}
              src={notification}
              alt="notification"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
