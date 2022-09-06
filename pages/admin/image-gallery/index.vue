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
          <th>SUB CATEGORY ID</th>
          <th>TITLE</th>
          <th>SLUG</th>
          <th>CREATED AT</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td>1</td>
          <td>1</td>
          <td>Malcolm Lockyer</td>
          <td>1</td>
          <td>6/9/2022</td>
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
export default {
  layout: "admin",
  setup() {
    const title = "IMAGE-GALLERY";

    return { title };
  },
};
</script>

<style>
</style>