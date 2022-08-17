<template>
  <div class="w-[20px] h-[20px]">
    <div v-for="message in messages" :key="message">
      <p>Thong bao {{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["messages"],
};
</script>
