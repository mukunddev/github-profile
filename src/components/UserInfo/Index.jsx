import React, { useEffect, useState } from "react";

import profileService from "../../services/profile.service";
import styles from "./UserInfo.module.scss";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const userData = await profileService.getUserData();
      setUserInfo(userData);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.userContainer}>
      <div className={styles.imgBox}>
        <a href="/">
          <img src={userInfo.avatar_url} alt="" />
        </a>
      </div>
      <h1>{userInfo.name}</h1>
      <h3>{userInfo.login}</h3>
      <p className={styles.bio}>{userInfo.bio}</p>
      <div className={styles.btnContainer}>
        <button>Edit Bio</button>
      </div>
      <ul>
        <li>{userInfo.company}</li>
        <li>{userInfo.location}</li>
        <li>
          <a href="/">Sign in to view email</a>
        </li>
      </ul>
    </div>
  );
}
