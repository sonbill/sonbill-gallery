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
        rounded-lg
        shadow
      "
    >
      <h1 class="font-bold text-[24px] mb-10">Input your sub category</h1>
      <form @submit.prevent="createSubCategory" class="flex flex-col space-y-5">
        <select
          v-model="subCategoryForm.category_id"
          class="
            p-3
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
        >
          <option selected disabled>Select your option</option>
          <option
            :value="category.id"
            v-for="category in categories"
            :key="category.id"
          >
            {{ category.title }}
          </option>
        </select>
        <input
          v-model="subCategoryForm.title"
          type="text"
          placeholder="Name your sub category..."
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
        <button
          @click="createSubCategory"
          class="p-2 bg-black text-white rounded"
        >
          Submit
        </button>
        <NuxtLink to="/admin/sub-category">Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  useStore,
  useRouter,
  onMounted,
  computed,
} from "@nuxtjs/composition-api";

import axios from "axios";

import Cookies from "js-cookie";

export default {
  layout: "admin",
  setup() {
    const title = "Sub Category";
    const store = useStore();
    const router = useRouter();

    const subCategoryForm = reactive({
      category_id: {},
      title: "",
    });

    const createSubCategory = async () => {
      const accessToken = JSON.parse(Cookies.get("access_token"));
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      await axios
        .post("store-subcategory", subCategoryForm, config)
        .then((response) => {
          alert(JSON.stringify(response.data.message));
          router.push("/admin/sub-category");
        });
    };

    onMounted(() => {
      store.dispatch("category/getCategories");
    });
    const categories = computed(() => store.getters["category/categories"]);
    console.log(categories);

    return { title, createSubCategory, categories, subCategoryForm };
  },
};
</script>
