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
        rounded-lg
        shadow
      "
    >
      <h1 class="font-bold text-[24px] mb-10">Input your image</h1>
      <form @submit.prevent="createSubCategory" class="flex flex-col space-y-5">
        <select
          class="
            p-3
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
            :value="subCategory.id"
            v-for="subCategory in subCategories"
            :key="subCategory.id"
          >
            {{ subCategory.title }}
          </option>
        </select>
        <input
          type="text"
          placeholder="Name your image..."
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
        <div>
          <label
            for="uploadImageButton"
            class="
              appearance-none
              w-full
              bg-[#52525b]
              hover:bg-black
              active:bg-[#404040]
              text-white
              px-3
              py-2
              rounded
              shadow
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            >Chọn tệp</label
          >
          <input type="file" id="uploadImageButton" hidden />
          <span id="file-chosen">No file chosen</span>
        </div>
      </form>
      <div class="mt-5 space-x-5">
        <button class="p-2 bg-black text-white rounded">Submit</button>
        <NuxtLink to="/admin/sub-category">Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  useStore,
  useRouter,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

export default {
  layout: "admin",
  setup() {
    const title = "IMAGE-GALLERY";
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      store.dispatch("subcategory/getSubCategories");
    });
    const subCategories = computed(
      () => store.getters["subcategory/subCategories"]
    );
    console.log(subCategories);

    return { title, subCategories };
  },
};
</script>
