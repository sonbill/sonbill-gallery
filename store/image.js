import axios from "axios";
import Cookies from "js-cookie";

export const state = () => ({
  images: []
})

export const getters = {
  images(state) {
    return state.images
  }
}

export const mutations = {
  SET_IMAGES(state, images) {
    state.images = images
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
