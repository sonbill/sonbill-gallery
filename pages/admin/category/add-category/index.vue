<template>
  <div>
    <Title :title="title" />
    <div
      class="
        flex flex-col
        items-center
        justify-center
        mx-auto
        border
        p-10
        w-[500px]
        h-[300px]
        rounded-lg
        shadow
      "
    >
      <h1 class="font-bold text-[24px] mb-10">Input your category</h1>
      <form @submit.prevent="createCategory">
        <input
          v-model="categoryForm.title"
          type="text"
          placeholder="Name your category..."
          class="
            p-3
            appearance-none
            w-full
            bg-white
            border border-gray-400
            hover:border-gray-500
            px-4
            py-2
            pr-8
            rounded
            shadow
            leading-tight
            focus:outline-none focus:shadow-outline
          "
        />
      </form>
      <div class="mt-5 space-x-5">
        <button @click="createCategory" class="p-2 bg-black text-white rounded">
          Submit
        </button>
        <NuxtLink to="/admin/category">Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, useRouter } from "@nuxtjs/composition-api";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  layout: "admin",
  setup() {
    const title = "Add Category";
    const store = useStore();
    const router = useRouter();

    const categoryForm = ref({
      title: "",
    });

    const createCategory = async () => {
      // await store
      //   .dispatch("category/createCategory", categoryForm.value)
      //   .then((response) => {
      //     console.log(response);
      //     if (response) {
      //       router.push("/admin/category");
      //     }
      //   })
      //   .catch((error) => {
      //     alert(error);
      //   });
      const accessToken = JSON.parse(Cookies.get("access_token"));

      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      await axios
        .post("store-category", categoryForm.value, config)
        .then((response) => {
          alert(JSON.stringify(response.data.message));
          router.push("/admin/category");
        });
    };

    return { title, categoryForm, createCategory };
  },
};
</script>

