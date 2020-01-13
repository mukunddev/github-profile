import profileService from "../../../services/profile.service";
import {
  SET_REPO_LIST,
  SET_FORK_REPO_LIST,
  SET_FILTER
} from "./repo.actiontype";

export const getRepos = () => async dispatch => {
  try {
    const repos = await profileService.searchRepository();
    dispatch({
      type: SET_REPO_LIST,
      payload: repos
    });
    dispatch(getForkedReposInfo(repos));
  } catch (error) {
    console.log("Something went wrong while fetching repository.");
  }
};

export const getForkedReposInfo = repos => async dispatch => {
  try {
    const forkedReposPromise = repos
      .filter(repo => repo.fork)
      .map(repo => profileService.getForkedRepoInfo(repo.url));
    const forkedReposInfo = await Promise.all(forkedReposPromise);
    const forkedInfo = {};
    forkedReposInfo.forEach(forkedRepo => {
      forkedInfo[forkedRepo.id] = {
        repo_forks_count: forkedRepo.parent.forks_count,
        fork_repo_full_name: forkedRepo.parent.full_name
      };
    });
    dispatch({
      type: SET_FORK_REPO_LIST,
      payload: forkedInfo
    });
  } catch (error) {
    console.log("Something went wrong while fetching repository.");
  }
};

export const setFilter = filter => async dispatch => {
  dispatch({
    type: SET_FILTER,
    payload: filter
  });
};

export const resetFilter = filter => async dispatch => {
  dispatch({
    type: SET_FILTER,
    payload: { query: "", type: "", language: "" }
  });
};
