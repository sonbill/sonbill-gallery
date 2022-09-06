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
  // CREATE SUBCATEGORY
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
  },
  // GET SUBCATEGORY
  async getSubCategories(vuexContext) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("get-subcategory", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            vuexContext.commit('SET_SUBCATEGORIES', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },
  async deleteSubCategory({ commit, state }, id) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    if (accessToken) {
      await axios.delete(`sub-categories/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const newSubCategories = state.subCategories.filter(item => item.id !== id);
      commit('SET_SUBCATEGORIES', newSubCategories);
    }
  }
}