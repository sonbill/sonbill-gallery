import axios from "axios";
import Cookies from "js-cookie";

export const state = () => ({
  images: [],
  errors: null,

})

export const getters = {
  images(state) {
    return state.images
  },
  errors: state => state.errors

}

export const mutations = {
  SET_IMAGES(state, images) {
    state.images = images
  },
  SET_ERRORS(state, errors) {
    state.errors = errors
  }
}

export const actions = {
  async getImages({ commit }) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("images", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            commit('SET_IMAGES', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },

  async addImage({ commit }, formData) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.post("create-image", formData, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            resolve(console.log(response));
          })
          .catch((error) => {
            commit("SET_ERRORS", error.response.data)
          });
      }
    })
  },
  // async deleteAccount({ commit, state }, id) {
  //   const accessToken = JSON.parse(Cookies.get("access_token"));
  //   if (accessToken) {
  //     await axios.delete(`accounts/${id}`, {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     });
  //     const newAccounts = state.accounts.filter(item => item.id !== id);
  //     commit('SET_ACCOUNTS', newAccounts);
  //   }
  // }
}

