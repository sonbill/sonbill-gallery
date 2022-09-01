<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <Title :title="title" />
      <div class="mt-3 md:mt-0">
        <NuxtLink
          to="/admin/sub-category/add-sub-category"
          class="p-3 rounded bg-black text-white text-[14px]"
          >ADD SUB-CATEGORY</NuxtLink
        >
      </div>
    </div>
    <table class="table-fixed w-full mt-10">
      <thead class="w-full">
        <tr class="border-b-[1px] text-center">
          <th>ID</th>
          <th>CATEGORY ID</th>
          <th>TITLE</th>
          <th>SLUG</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td class="space-x-6">
            <button>Edit</button>
            <button>Delete</button>
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
    const title = "Sub Category";
    const store = useStore();

    return { title, store };
  },
};
</script>
