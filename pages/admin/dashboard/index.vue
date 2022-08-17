<template>
  <div>
    <h1>DASHBOARD PAGE</h1>
    <div v-for="item in data" :key="item.id">
      <p>{{ item.name }}</p>
    </div>
    <button @click="getUser()">Click</button>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@nuxtjs/composition-api";

export default {
  setup() {
    let data = ref([]);
    const getUser = async () => {
      const accessTokenObj = JSON.parse(localStorage.getItem("access_token"));

      // request.headers.common["Authorization"] = `Bearer ${token}`;
      data = await axios
        .get("http://127.0.0.1:8000/api/user", {
          headers: { Authorization: `Bearer ${accessTokenObj}` },
        })
        .then((response) => {
          console.log(response);
          response.forEach((res) => {
            data.push(res);
          });
          return data;
        })
        .catch((err) => {
          console.log(err.response.data.message.email);
          return err.response.data.message;
        });

      return { data };
    };

    return { getUser, data };
  },
};
</script>

