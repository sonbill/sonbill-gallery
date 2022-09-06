<template>
  <div
    class="
      absolute
      z-50
      left-0
      inset-y-0
      w-64
      bg-gray-100
      dark:bg-gray-900
      border-r border-gray-400
      dark:border-gray-600
      overflow-y-auto
      transform
      duration-200
    "
  >
    <!-- LOGO -->
    <div class="flex items-center justify-between p-4">
      <NuxtLink to="/">
        <h1>SONBILL GALLERY</h1>
      </NuxtLink>
      <button class="text-gray-700 hover:text-gray-900 text-lg">
        <!-- <fa icon="times" /> -->nut
      </button>
    </div>
    <!-- NUXT LINKS -->
    <div class="flex flex-col space-y-4 px-4 mt-4">
      <nuxt-link
        to="/admin/dashboard"
        class="
          px-4
          py-2
          mx-4
          focus:shadow-outline focus:outline-none
          hover:bg-black hover:text-white
        "
        >Dashboard</nuxt-link
      >

      <nuxt-link
        to="/admin/category"
        class="
          px-4
          py-2
          mx-4
          focus:shadow-outline focus:outline-none
          hover:bg-black hover:text-white
          text-blue
        "
        >Category</nuxt-link
      >
      <nuxt-link
        to="/admin/sub-category"
        class="
          px-4
          py-2
          mx-4
          focus:shadow-outline focus:outline-none
          hover:bg-black hover:text-white
          text-blue
        "
        >Sub Category</nuxt-link
      >
      <nuxt-link
        to="/admin/image-gallery"
        class="
          px-4
          py-2
          mx-4
          focus:shadow-outline focus:outline-none
          hover:bg-black hover:text-white
        "
        >Image</nuxt-link
      >
      <nuxt-link
        to="/admin/accounts"
        class="
          px-4
          py-2
          mx-4
          focus:shadow-outline focus:outline-none
          hover:bg-black hover:text-white
        "
        >Accounts</nuxt-link
      >
    </div>
    <!-- USER -->
    <div class="fixed bottom-0 p-4">
      <div>SB</div>
      <button @click="logout">LOGOUT</button>
      <div class="mt-5 text-sm">{{ dateTime }}</div>
    </div>
  </div>
</template>

// <script>
import Cookies from "js-cookie";
import { ref, useStore } from "@nuxtjs/composition-api";
import axios from "axios";

export default {
  // props: ["name"],
  setup() {
    let dateTime = ref(null);
    const store = useStore();

    const columns = [
      "col1",
      "col2",
      "col3",
      // {
      //   title: "Reading List",
      //   icon: "📚",
      // },
      // {
      //   title: "Listings",
      //   icon: "📜",
      // },
      // {
      //   title: "Podcasts",
      //   icon: "🎙",
      // },
      // {
      //   title: "Tags",
      //   icon: "🔖",
      // },
    ];

    // const logout = async () => {
    //   await axios.post("logout");
    //   const cookie = Cookies.get("access_token");
    //   if (cookie) {
    //     Cookies.remove("access_token");
    //   }
    //   axios.defaults.headers.common["Authorization"] = "";

    //   router.push("/login");
    // };

    const logout = async () => {
      await store.dispatch("auth/logoutUser");
    };

    const currentDateTime = () => {
      const current = new Date();
      const date =
        current.getDate() +
        "-" +
        current.getMonth() +
        "-" +
        current.getFullYear();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      dateTime = date + " - " + time;
      return dateTime;
    };
    currentDateTime();
    return { dateTime, logout };
  },
};
</script>
