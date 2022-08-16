<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <h1 class="font-bold text-[36px] mb-6 text-center text-black pt-24">
        Register
      </h1>
      <div
        class="space-y-5 p-8 border-t-12 bg-white mb-6 rounded-lg md:shadow-lg"
      >
        <form>
          <div class="flex flex-col space-y-3 mb-5">
            <input placeholder=" Name" class="border p-3 rounded" />
            <input placeholder=" Email" class="border p-3 rounded" />
            <input placeholder=" Password" class="border p-3 rounded" />
            <input placeholder=" Confirm Password" class="border p-3 rounded" />
          </div>
          <div>
            <input type="checkbox" name="checkbox1" value="Bike" />
            <label for="checkbox1">
              I agree to
              <a href="#" class="hover:underline">Terms of Use</a> and
              <a href="#" class="hover:underline">Privacy Policy</a></label
            ><br />
          </div>
        </form>
        <div>
          <button
            class="text-white w-full bg-black font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Have an account?
          <NuxtLink to="login" class="hover:underline font-bold">Login</NuxtLink
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";

export default {
  setup() {},
};
</script>
