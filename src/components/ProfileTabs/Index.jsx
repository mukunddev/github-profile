import React from "react";

import { tabs } from "../../blueprints/tabs.blueprint";
import styles from "./ProfileTabs.module.scss";

export default function ProfileTabs() {
  const listTab = () => {
    return tabs.map(tab => (
      <li className={tab.active ? styles.active : null} key={tab.name}>
        {tab.name}
        {tab.count > -1 ? <span>{tab.count}</span> : null}
      </li>
    ));
  };
  return <ul className={styles.tabs}>{listTab()}</ul>;
}
