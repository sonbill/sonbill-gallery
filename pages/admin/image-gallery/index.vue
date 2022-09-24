<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <Title :title="title" />
      <div class="mt-3 md:mt-0">
        <NuxtLink
          to="/admin/category/add-category"
          class="p-3 rounded bg-black text-white text-[14px]"
          >ADD IMAGE</NuxtLink
        >
      </div>
    </div>
    <table class="table-fixed w-full mt-10">
      <thead>
        <tr class="w-[500px] border-b-[1px]">
          <th>ID</th>
          <th>IMAGE</th>
          <th>TITLE</th>
          <th>SUB CATEGORY ID</th>
          <th>SIZE</th>
          <th>SLUG</th>
          <th>CREATED AT</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="image in images" :key="image.id">
          <td>{{ image.id }}</td>
          <td>
            <img
              :src="'http://localhost:8000/storage/images/' + image.image_path"
              alt=""
              class="w-10 h-10 object-cover"
            />
          </td>
          <td>{{ image.title }}</td>
          <td>{{ image.subcategory_id }}</td>
          <td>{{ image.size }} MB</td>
          <td>{{ image.slug }}</td>
          <td>{{ image.created_at }}</td>
          <td class="space-x-6 flex">
            <button class="flex items-center">
              <span class="material-icons"> edit </span>
            </button>
            <button class="flex items-center">
              <span class="material-icons"> clear </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, useStore, computed, onMounted } from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  setup() {
    const title = "IMAGE-GALLERY";

    const store = useStore();

    onMounted(() => {
      store.dispatch("image/getImages");
    });

    // const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2;
    // console.log(bytesToMegaBytes(4675758));

    const images = computed(() => store.getters["image/images"]);
    console.log(images);

    return { title, images };
  },
};
</script>

<style>
</style>