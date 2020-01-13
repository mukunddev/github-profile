import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import Repo from "./Repo";
import RepoResult from "../SearchResult/Index";
import { getRepos } from "../../store/actions/repo/repo.action";
import styles from "./RepoList.module.scss";

const RepoList = props => {
  useEffect(() => {
    props.getRepos();
  }, []);

  const filterRepo = () => {
    return props.repos.filter(repo => {
      let isQuery = true;
      let isType = true;
      let isLanguage = true;

      if (props.filter.query) {
        isQuery = repo.name
          .toLowerCase()
          .includes(props.filter.query.toLowerCase());
      }
      if (props.filter.language) {
        isLanguage =
          repo.language &&
          repo.language.toLowerCase() === props.filter.language;
      }
      if (props.filter.type) {
        isType = repo[props.filter.type];
      }
      return isQuery && isType && isLanguage;
    });
  };

  const renderRepos = repos => {
    return repos.map(repo => <Repo repo={repo} key={repo.id} />);
  };

  const renderSearchResult = repos => {
    return props.filter.query || props.filter.type || props.filter.language ? (
      <RepoResult filtereRepos={repos} filter={props.filter} />
    ) : null;
  };

  const filtereRepos = filterRepo();
  return (
    <Fragment>
      {renderSearchResult(filtereRepos)}
      <ul className={styles.repoInfo}>{renderRepos(filtereRepos)}</ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    repos: state.repo.list,
    filter: state.repo.filter
  };
};

const mapDispatchToProps = {
  getRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
