import React from "react";
import { connect } from "react-redux";

import { resetFilter } from "../../store/actions/repo/repo.action";
import styles from "./SearchResult.module.scss";

const SearchResult = props => {
  return (
    <ul className={styles.resultContainer}>
      <li>
        {props.filtereRepos.length} results for {props.filter.type} repositories
        {props.filter.language ? (
          <span> written in {props.filter.language}</span>
        ) : null}
      </li>
      <li className={styles.clear} onClick={props.resetFilter}>
        Clear Filter
      </li>
    </ul>
  );
};

const mapDispatchToProps = {
  resetFilter
};

export default connect(null, mapDispatchToProps)(SearchResult);
