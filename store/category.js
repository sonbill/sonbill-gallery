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
  },
  async getCategories(vuexContext) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("get-category-list", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            vuexContext.commit('SET_CATEGORIES', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },
  async getCategory(vuexContext) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("get-category", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            vuexContext.commit('SET_CATEGORIES', response.data.data);
            resolve(response.data.data)
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },
  async updateCategory({ commit, state }, id) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    if (accessToken) {
      await axios.put(`categories/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    }
  },

  async deleteCategory({ commit, state }, id) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    if (accessToken) {
      await axios.delete(`categories/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const newCategories = state.categories.filter(item => item.id !== id);
      commit('SET_CATEGORIES', newCategories);
    }
  }
}