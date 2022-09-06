<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <Title :title="title" />
      <div class="mt-3 md:mt-0">
        <NuxtLink
          to="/admin/category/add-category"
          class="p-3 rounded bg-black text-white text-[14px]"
          >ADD CATEGORY</NuxtLink
        >
      </div>
    </div>
    <table class="table-fixed w-full mt-10">
      <thead class="w-full">
        <tr class="border-b-[1px] text-center">
          <th>ID</th>
          <th>TITLE</th>
          <th>SLUG</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.title }}</td>
          <td>{{ category.slug }}</td>
          <td class="space-x-6">
            <button>Edit</button>
            <button @click="deleteCategory(category.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  useRouter,
  useStore,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  setup() {
    const title = "Category";

    const store = useStore();
    
    onMounted(() => {
      store.dispatch("category/getCategories");
    });
    const categories = computed(() => store.getters["category/categories"]);

    const deleteCategory = async (categoryid) => {
      store.dispatch("category/deleteCategory", categoryid);
    };

    console.log(categories);

    return { title, categories, deleteCategory };
  },
};
</script>

<style>
</style>