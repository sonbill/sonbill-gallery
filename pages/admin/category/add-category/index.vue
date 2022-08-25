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
      <form>
        <input
          type="text"
          placeholder="Name your category..."
          class="border p-3"
        />
        <button class="p-3 bg-black text-white">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  setup() {
    const title = "Add Category";

    return { title };
  },
};
</script>

<style>
</style>