<template>
  <div class="w-full">
    <Title :title="title" />
    <table class="W-full">
      <thead>
        <tr class="w-[500px] border-b-[1px]">
          <th>ID</th>
          <th>TITLE</th>
          <th>SLUG</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>2</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  setup() {
    const title = "Category";
    const columns = [
      "col1",
      "col2",
      "col3",
      // {
      //   title: "Reading List",
      //   icon: "📚",
      // },
      // {
      //   title: "Listings",
      //   icon: "📜",
      // },
      // {
      //   title: "Podcasts",
      //   icon: "🎙",
      // },
      // {
      //   title: "Tags",
      //   icon: "🔖",
      // },
    ];

    return { title, columns };
  },
};
</script>

<style>
</style>