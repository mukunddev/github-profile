import { api } from "../constants/api.constant";

class UserProfileService {
  async getUserData() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}${api.USER_PROFILE_URL}`
      );
      const userData = await res.json();
      return userData;
    } catch (err) {
      throw new Error(err);
    }
  }

  async searchRepository() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}${api.REPO_SEARCH_URL}`
      );
      const repos = await res.json();
      return repos;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getForkedRepoInfo(url) {
    try {
      const res = await fetch(url);
      const repos = await res.json();
      return repos;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const userProfileService = new UserProfileService();
export default userProfileService;
