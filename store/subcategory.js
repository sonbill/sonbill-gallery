import axios from "axios";
import Cookies from "js-cookie";


export const state = () => ({
  subCategories: []
})

export const getters = {
  subCategories: (state) => {
    return state.subCategories;
  }
}

export const mutations = {
  SET_SUBCATEGORIES(state, subCategories) {
    state.subCategories = subCategories;
  }
}

export const actions = {
  async createSubCategory(credentials) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    const authUrlApi = "store-subcategory"
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    if (accessToken) {
      const res = await axios.post(authUrlApi, credentials, config);
      alert(res.data.message);
    }
  }
}