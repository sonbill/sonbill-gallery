<template>
  <div>
    <!-- <Title :title="title" /> -->
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
      <form @submit.prevent="createCategory">
        <input
          v-model="categoryForm.title"
          type="text"
          placeholder="Name your category..."
          class="border p-3"
        />
        <button @click="createCategory" class="p-3 bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, useStore } from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  setup() {
    const title = "Add Category";
    const store = useStore();

    const categoryForm = ref({
      title: "",
    });

    const createCategory = async () => {
      await store.dispatch("category/createCategory", categoryForm.value);
    };

    return { categoryForm, createCategory };
  },
};
</script>

