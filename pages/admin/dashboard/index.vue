<template>
  <div><Title :title="title" /></div>
</template>

<script>
import axios from "@/axios";

import { ref } from "@nuxtjs/composition-api";

export default {
  components: ["Title"],
  setup() {
    // Title
    const title = "Dashboard";

    let data = ref([]);
    const getUser = async () => {
      const accessToken = JSON.parse(localStorage.getItem("access_token"));

      // request.headers.common["Authorization"] = `Bearer ${token}`;

      data = await axios
        .get("user", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch((err) => {
          console.log(err.response.data.message.email);
          return err.response.data.message;
        });
      return { data };
    };
    getUser();

    return { data, title };
  },
};
</script>

