<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <h1 class="font-bold text-[36px] mb-6 text-center text-black pt-24">
        Login
      </h1>
      <div class="space-y-5 p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <form>
          <div class="flex flex-col space-y-5">
            <input placeholder="Email" class="border p-3 rounded" />
            <input placeholder="Password" class="border p-3 rounded" />
          </div>
        </form>
        <div class="flex flex-col items-center space-y-4">
          <button
            class="text-white w-full bg-black font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <a
            class="
              hover:underline
              inline-block
              font-bold
              text-sm text-blue
              float-right
            "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Don't have an account?
          <a href="#" class="hover:underline font-bold">Create an Account</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  setup() {
    

  },
};
</script>

<style>
</style>