<template>
  <div>
    <div class="p-5 md:p-0">
      <Title :title="title" />
    </div>
    <div class="mt-10">
      <div class="w-full my-3">
        <img
          src="https://images.unsplash.com/photo-1492045379936-abb525f8dacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80"
          alt=""
          class="w-full object-cover"
        />
        <p class="text-center mt-3">25-08-2022 / 1</p>
      </div>
      <div class="w-full my-3">
        <img
          src="https://images.unsplash.com/photo-1492045379936-abb525f8dacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80"
          alt=""
          class="w-full object-cover"
        />
        <p class="text-center mt-3">25-08-2022 / 1</p>
      </div>
      <div class="w-full my-3">
        <img
          src="https://images.unsplash.com/photo-1492045379936-abb525f8dacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80"
          alt=""
          class="w-full object-cover"
        />
        <p class="text-center mt-3">25-08-2022 / 1</p>
      </div>
      <div class="w-full my-3">
        <img
          src="https://images.unsplash.com/photo-1492045379936-abb525f8dacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80"
          alt=""
          class="w-full object-cover"
        />
        <p class="text-center mt-3">25-08-2022 / 1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  setup() {
    const title = "ROLL 1";

    return { title };
  },
};
</script>
