<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <h1 class="font-bold text-[36px] mb-6 text-center text-black pt-24">
        Login
      </h1>
      <div class="space-y-5 p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <form @submit.prevent="login">
          <div class="flex flex-col space-y-5">
            <input
              v-model="loginForm.email"
              type="email"
              placeholder="Email"
              class="border p-3 rounded focus:outline-none"
            />
            <div class="w-full flex items-center border p-3 rounded">
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                class="grow focus:outline-none"
              />
              <button @click="togglePassword" class="flex items-center">
                <span v-if="showPassword" class="material-icons">
                  visibility
                </span>
                <span v-else class="material-icons"> visibility_off </span>
              </button>
            </div>
          </div>
        </form>
        <div class="flex flex-col items-center space-y-4">
          <button
            @click="login"
            class="text-white w-full bg-black font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <NuxtLink
            class="
              hover:underline
              inline-block
              font-bold
              text-sm text-blue
              float-right
            "
            to="#"
          >
            Forgot Password?
          </NuxtLink>
        </div>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Don't have an account?
          <NuxtLink to="/register" class="hover:underline font-bold"
            >Create an Account</NuxtLink
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, useRouter } from "@nuxtjs/composition-api";
export default {
  setup() {
    const loginForm = ref({ email: "", password: "" });

    const router = useRouter();

    // SHOWPASSWORD
    const showPassword = ref(false);
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    // LOGIN FUNCTION
    const login = async () => {
      const data = await axios
        .post("http://127.0.0.1:8000/api/login", loginForm.value)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem(
            "access_token",
            JSON.stringify(response.data.access_token)
          );
          router.push("/admin/dashboard");
          return response.data;
        })
        .catch((err) => {
          console.log(err.response.data.message.email);
          return err.response.data.message;
        });
      return { data };
    };
    return { loginForm, login, togglePassword, showPassword };
  },
};
</script>

