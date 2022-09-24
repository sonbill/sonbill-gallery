import { useRouter, reactive, ref, useContext } from "@nuxtjs/composition-api";
import axios from "axios";
import Cookies from "js-cookie";



// const context = useContext();

export const state = () => ({
  token: Cookies.get('access_token') || '',
  // token: null,
  user: null,
  errors: null,
})


export const mutations = {
  // setAuth(state, auth) {
  //   state.auth = auth;
  // }
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_ERRORS(state, errors) {
    state.errors = errors
  }
};

export const actions = {
  // setAuth({ commit }, auth) {
  //   commit("setAuth", auth);
  // },

  // nuxtServerInit({ dispatch }, context) {
  //   return Promise.all([
  //     dispatch('auth/authenticateUser', context),
  //   ])
  // },

  // nuxtServerInit({ commit }, { req }) {
  //   const cookies = new Cookies(req.headers.cookie)
  //   const token = cookies.get('token')
  //   commit('SET_TOKEN', token);
  // },

  async authenticateUser(vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      // check login or register
      let authUrlApi = "login"
      if (!credentials.isLogin) {
        authUrlApi = "register"
      }
      return axios.post(authUrlApi, credentials)
        .then((response) => {
          const token = response.data.access_token
          if (token) {
            Cookies.set(
              "access_token",
              JSON.stringify(token), { expires: 1 }
            );
            vuexContext.commit('SET_TOKEN', token)
            this.$router.push('/admin/dashboard')
          }
          resolve(response)
          console.log(response)
        }).catch((error) => {
          reject(vuexContext.commit("SET_ERRORS", error.response.data));
        });
    })
  },
  getUser(vuexContext) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get("user", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            vuexContext.commit('SET_USER', response.data);
            resolve(response.data)
          })
          .catch((error) => {
            reject(vuexContext.commit("SET_ERRORS", error.response.data));
          });
      }
    })
  },

  logoutUser({ commit }) {
    const accessToken = JSON.parse(Cookies.get("access_token"));

    axios.post("logout")
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    commit('SET_TOKEN', '');
    commit('SET_USER', '');
    Cookies.remove('access_token')

    this.$router.push('/login')
  },
}

// export const getters = {
//   isAuthenticated(state) {
//     state.token != null
//   }
// }

export const getters = {
  token: state => state.token,
  user: state => state.user,
  errors: state => state.errors
}


// export default {
//   state,
//   mutations,
//   actions
// }