<script setup>
import { ref, useAsync, useContext } from "@nuxtjs/composition-api";
import axios from "axios";

const registerForm = ref({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
});

// data.value = await axios.post("https:///localhost:8000/api/register");

// const register = async () => {
//   const data = ref(null);
//   data = await $axios.$post("https:///localhost:8000/api/register");
//   return { data };
// };
// const register = async () => {
//   const { $http } = useContext();
//   const data = useAsync(() =>
//     $http.$post("https:///localhost:8000/api/register")
//   );
//   return { data };
// };

const register = async () => {
  const data = await axios
    .post("/api/register", registerForm)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return { data };
};
</script>


<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <h1 class="font-bold text-[36px] mb-6 text-center text-black pt-24">
        Register
      </h1>
      <div
        class="space-y-5 p-8 border-t-12 bg-white mb-6 rounded-lg md:shadow-lg"
      >
        <form @submit.prevent="register">
          <div class="flex flex-col space-y-3 mb-5">
            <input
              v-model="registerForm.name"
              placeholder="Name"
              class="border p-3 rounded"
            />
            <input
              v-model="registerForm.email"
              placeholder="Email"
              class="border p-3 rounded"
            />
            <input
              v-model="registerForm.password"
              placeholder="Password"
              type="password"
              class="border p-3 rounded"
            />
            <input
              v-model="registerForm.confirm_password"
              type="password"
              placeholder="Confirm Password"
              class="border p-3 rounded"
            />
          </div>
        </form>
        <div>
          <button
            @click="register()"
            class="text-white w-full bg-black font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Have an account?
          <NuxtLink to="/login" class="hover:underline font-bold"
            >Login</NuxtLink
          >.
        </p>
      </div>
    </div>
  </div>
</template>
