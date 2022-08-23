import { reactive, ref, useContext } from "@nuxtjs/composition-api";
import axios from "axios";
import Cookies from "js-cookie";

// const context = useContext();

export const state = () => ({
  token: null,
  user: null
})


export const mutations = {
  // setAuth(state, auth) {
  //   state.auth = auth;
  // }
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user
  }
};

export const actions = {
  // setAuth({ commit }, auth) {
  //   commit("setAuth", auth);
  // },
  nuxtServerInit({ dispatch }, context) {
    return Promise.all([
      dispatch('auth/authenticateUser', context),
    ])
  },
  authenticateUser(vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      // check login or register
      let authUrlApi = "login"
      if (!credentials.isLogin) {
        authUrlApi = "register"
      }
      return axios.post(authUrlApi, credentials)
        .then((response) => {
          vuexContext.commit('setToken', response.data.access_token)
          if (response.data.access_token) {
            Cookies.set(
              "access_token",
              JSON.stringify(response.data.access_token),
              { expires: 1 }
            );
          }
          resolve(response)
        }).catch((error) => {
          // console.log(err.response.data.message.email);
          reject(error)
        });
    })
  },
  getUser(context) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      const data = axios.get("user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          context.commit('setUser', response.data);
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
          // console.log(err.response.data.message.email);
          // return error.response.data.message;
        });
      return { data };
    })
  },
}

// export const getters = {
//   isAuthenticated(state) {
//     state.token != null
//   }
// }


// export default {
//   state,
//   mutations,
//   actions
// }