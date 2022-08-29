import axios from "axios";
import Cookies from "js-cookie";


export const state = () => ({
  categories: []
})

export const getters = {
  categories: (state) => {
    return state.categories;
  }
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  }
}

export const actions = {
  async createCategory(credentials) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    const authUrlApi = "store-category"
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    if (accessToken) {
      const res = await axios.post(authUrlApi, credentials, config);
      alert(res.data.message);
    }
  }
}