import { reactive, useContext } from "@nuxtjs/composition-api";
import axios from "axios";
import Cookies from "js-cookie";

// const context = useContext();

export const state = () => ({
  token: "null"
})


// export const getters = {
//   isAuthenticated(state, auth) {
//     return state.token != null
//   }
// }

export const mutations = {
  // setAuth(state, auth) {
  //   state.auth = auth;
  // }
  setToken(state, token) {
    state.token = token;
  },
};

export const actions = {
  setAuth({ commit }, auth) {
    commit("setAuth", auth);
  },
  authenticateUser(context, credentials) {
    // check login or register
    let authUrlApi = "login"
    if (!credentials.isLogin) {
      authUrlApi = "register"
    }

    const data = axios.post(authUrlApi, credentials)
      .then((response) => {
        if (response.data.access_token) {
          Cookies.set(
            "access_token",
            JSON.stringify(response.data.access_token),
            { expires: 1 }
          );
        }
        return response
      }).catch((err) => {
        // console.log(err.response.data.message.email);
        return err.response.data.message;
      });
    return { data }
  }
}


// export default {
//   state,
//   mutations,
//   actions
// }