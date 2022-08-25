<template>
  <div>
    <Title :title="title" />
  </div>
</template>

<script>
import { ref, useStore, computed } from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  middleware: "auth",
  setup() {
    // Title
    const title = "Dashboard";

    // const localToken = computed(() => store.state.auth.token);

    // .then((response) => {
    //   user.push(response.data);
    //   console.log(user);
    // })
    // .catch((error) => error.message);

    // const accessToken = JSON.parse(Cookies.get("access_token"));

    // request.headers.common["Authorization"] = `Bearer ${token}`;

    // const data = await axios
    //   // .get("user", {
    //   //   headers: { Authorization: `Bearer ${accessToken}` },
    //   // })
    //   // .then((response) => {
    //   //   console.log(response.data);
    //   //   return response.data;
    //   // })
    //   // .catch((err) => {
    //   //   console.log(err.response.data.message.email);
    //   //   return err.response.data.message;
    //   // });

    return { title };
  },
};
</script>

