import {
  SET_REPO_LIST,
  SET_FORK_REPO_LIST,
  SET_FILTER
} from "../../actions/repo/repo.actiontype";

export default function(
  state = { list: [], filter: { query: "", type: "", language: "" } },
  action
) {
  switch (action.type) {
    case SET_REPO_LIST:
      return {
        ...state,
        list: action.payload
      };
    case SET_FORK_REPO_LIST:
      const repos = [...state.list];
      const updatesRepos = repos.map(repo => {
        if (action.payload[repo.id]) {
          return {
            ...repo,
            ...action.payload[repo.id]
          };
        }
        return repo;
      });
      return {
        ...state,
        list: updatesRepos
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}
