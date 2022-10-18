import axios from "axios";
import Cookies from "js-cookie";


export const state = () => ({
  categories: [],
  current_page: null,
  links: [],
  next_page_url: null,
  prev_page_url: null
})

export const getters = {
  categories: (state) => {
    return state.categories;
  },
  current_page: (state) => {
    return state.current_page;
  },
  next_page_url: (state) => {
    return state.next_page_url
  },
  prev_page_url: (state) => {
    return state.prev_page_url
  },
  links: (state) => {
    return state.links
  },

}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CURRENT_PAGES(state, page) {
    state.current_page = page;
  },
  SET_NEXT_PAGE_URL(state, url) {
    state.next_page_url = url;
  },
  SET_PREV_PAGE_URL(state, url) {
    state.previous_page_url = url;
  },
  SET_LINKS_PAGE_URL(state, url) {
    state.links = url;
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
            vuexContext.commit('SET_CURRENT_PAGES', response.data.current_page);
            vuexContext.commit('SET_NEXT_PAGE_URL', response.data.next_page_url);
            vuexContext.commit('SET_PREV_PAGE_URL', response.data.prev_page_url);
            vuexContext.commit('SET_LINKS_PAGE_URL', response.data.links);
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
  },

  async nextPageUrlHandler(vuexContext, next_page_url) {
    return new Promise((resolve, reject) => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      if (accessToken) {
        axios.get(next_page_url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => {
            vuexContext.commit('SET_CATEGORIES', response.data.data);
          })
          .catch((error) => {
            reject(error)
          });
      }
    })
  },

}