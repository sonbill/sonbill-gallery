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
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    // const config = {
    //   headers: { Authorization: `Bearer ${accessToken}` },
    // };
    if (accessToken) {
      await axios.post(authUrlApi, credentials).then((response) => {
        console.log(response)
      });
    }
  }
}