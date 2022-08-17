<template>
  <div>
    <h1>DASHBOARD PAGE</h1>
  </div>
</template>

<script>
import axios from "@/axios";

import { ref } from "@nuxtjs/composition-api";

export default {
  setup() {
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

    return { data };
  },
};
</script>

