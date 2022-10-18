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
          <td class="space-x-6 flex">
            <button class="flex items-center" @click="showModal = true">
              <span class="material-icons"> edit </span>
            </button>
            <button
              class="flex items-center"
              @click="deleteCategory(category.id)"
            >
              <span class="material-icons"> clear </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :current_page="current_page"
      :links_page_url="links_page_url"
      :next_page_url="next_page_url"
      :prev_page_url="prev_page_url"
      @getNextUrl="getNextUrl(next_page_url)"
      @getPrevUrl="getPrevUrl(prev_page_url)"
    />
    <UpdatePopUp v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import {
  ref,
  useRouter,
  useStore,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  setup() {
    const title = "Category";

    const showModal = ref(false);

    const store = useStore();

    onMounted(() => {
      store.dispatch("category/getCategory");
    });

    const getNextUrl = async (next_page_url) => {
      await store.dispatch("category/nextPageUrlHandler", next_page_url);
    };
    const getPrevUrl = async (prev_page_url) => {
      await store.dispatch("category/prevPageUrlHandler", prev_page_url);
    };

    const categories = computed(() => store.getters["category/categories"]);
    const current_page = computed(() => store.getters["category/current_page"]);
    const links_page_url = computed(() => store.getters["category/links"]);

    const next_page_url = computed(
      () => store.getters["category/next_page_url"]
    );
    const prev_page_url = computed(
      () => store.getters["category/prev_page_url"]
    );

    const deleteCategory = async (category_id) => {
      await store.dispatch("category/deleteCategory", category_id);
    };

    return {
      title,
      categories,
      current_page,
      links_page_url,
      prev_page_url,
      next_page_url,
      deleteCategory,
      showModal,
      getNextUrl,
      getPrevUrl,
    };
  },
};
</script>

