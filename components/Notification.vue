<template>
  <div class="text-white bg-red-600">
    {{ message }}
  </div>
</template>

<style>
.notification {
  padding: 11px;
  margin: 10px 0px;
}
</style>

<script>
export default {
  name: "Notification",
  props: ["message"],
};
</script>
