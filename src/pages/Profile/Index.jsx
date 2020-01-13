import React from "react";

import UserInfo from "../../components/UserInfo/Index";
import ProfileTabs from "../../components/ProfileTabs/Index";
import RepoList from "../../components/RepoList/Index";
import SearchRepo from "../../components/SearchRepo/Index";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className="container">
      <div className={styles.profileContainer}>
        <div className={styles.profileLeft}>
          <UserInfo />
        </div>
        <div className={styles.profileRight}>
          <ProfileTabs />
          <SearchRepo />
          <RepoList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
