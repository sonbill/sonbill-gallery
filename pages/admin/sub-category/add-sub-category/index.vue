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
        md:p-10
        p-5
        md:w-[500px]
        w-[300px]
        rounded-lg
        shadow
      "
    >
      <h1 class="font-bold text-[24px] mb-10">Input your sub category</h1>
      <form
        @submit.prevent="createSubCategory"
        class="flex flex-col space-y-5 w-full"
      >
        <!-- SELECT / CATEGORY ID -->
        <select
          v-model="subCategoryForm.category_id"
          class="
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
        <!-- INPUT / TITLE -->
        <input
          v-model="subCategoryForm.title"
          type="text"
          placeholder="Name..."
          class="
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
        <!-- INPUT / CITY -->
        <input
          v-model="subCategoryForm.city"
          type="text"
          placeholder="City..."
          class="
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
        <!-- INPUT / PLACE -->
        <input
          v-model="subCategoryForm.place"
          type="text"
          placeholder="Place..."
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
        <!-- INPUT / ROLL -->
        <input
          v-model="subCategoryForm.roll"
          type="text"
          placeholder="Roll..."
          class="
            p-3
            appearance-none
            w-full
            bg-white
            border border-gray-400
            hover:border-gray-500
            px-4
            py-2
            rounded
            shadow
            leading-tight
            focus:outline-none focus:shadow-outline
          "
        />
        <textarea
          class="
            p-3
            appearance-none
            w-full
            bg-white
            border border-gray-400
            hover:border-gray-500
            px-4
            py-2
            rounded
            shadow
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          cols="20"
          rows="10"
          placeholder="Description..."
          v-model="subCategoryForm.description"
        >
        </textarea>
      </form>
      <div class="mt-5 space-x-5">
        <button
          @click="validateForm"
          class="
            appearance-none
            p-2
            transition-all
            border border-[#1a1a1a]
            bg-[#3b3b3b]
            text-white
            hover:-translate-y-1 hover:bg-black hover:text-white
            active:bg-[#404040] active:translate-y-0
            rounded
          "
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
      place: "",
      city: "",
      roll: "",
      description: "",
    });
    const validateForm = async () => {
      if (
        !subCategoryForm.category_id ||
        !subCategoryForm.title ||
        !subCategoryForm.place ||
        !subCategoryForm.city ||
        !subCategoryForm.roll
      ) {
        const error = "Please Fill All Required Fields";
        console.log(error);
      } else {
        await store.dispatch("subcategory/createSubCategory", subCategoryForm);
      }
    };

    // const createSubCategory = async () => {
    //   const accessToken = JSON.parse(Cookies.get("access_token"));
    //   const config = {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   };
    //   await axios
    //     .post("store-subcategory", subCategoryForm, config)
    //     .then((response) => {
    //       alert(JSON.stringify(response.data.message));
    //       router.push("/admin/sub-category");
    //     });
    // };

    onMounted(() => {
      store.dispatch("category/getCategories");
    });
    const categories = computed(() => store.getters["category/categories"]);
    console.log(categories);

    return { title, validateForm, categories, subCategoryForm };
  },
};
</script>

<style scoped>
/* CSS */
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>