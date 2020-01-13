import React from "react";
import { connect } from "react-redux";

import { setFilter } from "../../store/actions/repo/repo.action";
import { filterType, filterLanguage } from "../../blueprints/filter.blueprint";
import styles from "./SearchRepo.module.scss";

const SearchRepo = props => {
  const handleChange = e => {
    const filterOption = {
      ...props.filter,
      [e.target.name]: e.target.value
    };
    props.setFilter(filterOption);
  };

  const getOptions = options => {
    return options.map(option => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        name="query"
        placeholder="Find a Repository..."
        value={props.filter.query}
        onChange={handleChange}
      />
      <select name="type" onChange={handleChange} value={props.filter.type}>
        {getOptions(filterType)}
      </select>
      <select
        name="language"
        onChange={handleChange}
        value={props.filter.language}
      >
        {getOptions(filterLanguage)}
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.repo.filter
  };
};

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRepo);
