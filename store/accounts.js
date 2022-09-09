import axios from "axios";
import Cookies from "js-cookie";

export const state = () => ({
  accounts: []
})

export const getters = {
  accounts(state) {
    return state.accounts
  }
}

export const mutations = {
  SET_ACCOUNTS(state, accounts) {
    state.accounts = accounts
  }
}

export const actions = {
  async getAccounts({ commit }) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("get-accounts", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            commit('SET_ACCOUNTS', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },
  async deleteAccount({ commit, state }, id) {
    const accessToken = JSON.parse(Cookies.get("access_token"));
    if (accessToken) {
      await axios.delete(`accounts/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const newAccounts = state.accounts.filter(item => item.id !== id);
      commit('SET_ACCOUNTS', newAccounts);
    }
  }
}
