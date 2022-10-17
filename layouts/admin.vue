<template>
  <div class="min-h-screen">
    <Sidebar />
    <div class="ml-[256px] p-10 min-h-screen">
      <Nuxt />
      <!-- <Pagination class="absolute bottom-5 right-10" /> -->
    </div>
  </div>
</template>

<script>
import { ref, useStore, computed } from "@nuxtjs/composition-api";

export default {
  setup() {
    const store = useStore();

    const name = computed(() => store.state.auth.user.name);

    const getUser = async () => {
      await store.dispatch("auth/getUser");
    };
    getUser();

    return { name };
  },
};
</script>

<style>
</style>