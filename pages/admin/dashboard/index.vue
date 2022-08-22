<template>
  <div>
    <Title :title="title" />
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

import { ref } from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  middleware: "auth",
  setup() {
    // Title
    const title = "Dashboard";

    const getUser = async () => {
      const accessToken = JSON.parse(Cookies.get("access_token"));

      // request.headers.common["Authorization"] = `Bearer ${token}`;

      const data = await axios
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

    return { title };
  },
};
</script>

