import React from "react";

import styles from "./RepoList.module.scss";

import fork from "../../assets/images/fork.svg";
import mit from "../../assets/images/mit.svg";
import star from "../../assets/images/star.svg";

const langColorMap = {
  HTML: "#e34c26",
  CSS: "#563d7c",
  JavaScript: "#f1e05a"
};
export default function Repo(props) {
  const dateFilter = date => {
    const DATE_OPTIONS = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-IN", DATE_OPTIONS);
  };
  return (
    <li className={styles.repo}>
      <div className={styles.repoName}>
        <h3>
          <a href={props.repo.svn_url}>{props.repo.name}</a>
        </h3>
        {props.repo.fork ? (
          <p>
            <span>Forked from </span>
            <a href={props.repo.fork_repo_full_name}>
              {props.repo.fork_repo_full_name}
            </a>
          </p>
        ) : null}
      </div>
      <p>{props.repo.description}</p>
      <ul>
        {props.repo.language ? (
          <li>
            <span
              className={styles.langColor}
              style={{ backgroundColor: langColorMap[props.repo.language] }}
            ></span>
            {props.repo.language}
          </li>
        ) : null}
        {props.repo.stargazers_count > 0 ? (
          <li>
            <img className={styles.fork} src={star} alt="star" />
            {props.repo.stargazers_count}
          </li>
        ) : null}
        {props.repo.fork ? (
          <li>
            <img className={styles.fork} src={fork} alt="fork" />
            {props.repo.repo_forks_count}
          </li>
        ) : null}
        {props.repo.license ? (
          <li>
            <img className={styles.mit} src={mit} alt="mit" />
            {props.repo.license.name}
          </li>
        ) : null}
        <li>Updated on {dateFilter(props.repo.updated_at)}</li>
      </ul>
    </li>
  );
}
