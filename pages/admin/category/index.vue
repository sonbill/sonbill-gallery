<template>
  <div>
    <Title :title="title" />
    <Table :columns="columns" />
  </div>
</template>

<script>
export default {
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