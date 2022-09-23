<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <h1 class="font-bold text-[36px] mb-6 text-center text-black pt-24">
        Login
      </h1>
      <div class="space-y-5 p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <form @submit.prevent="login" @keyup.enter="login">
          <div class="flex flex-col space-y-5">
            <div v-if="errors" class="text-red-500">
              <p v-for="email in errors.errors.email" :key="email.id">
                {{ email }}
              </p>
            </div>
            <input
              v-model="loginForm.email"
              type="email"
              placeholder="Email"
              class="
                appearance-none
                w-full
                bg-white
                border border-gray-200
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
            <div v-if="errors" class="text-red-500">
              <p v-for="password in errors.errors.password" :key="password.id">
                {{ password }}
              </p>
            </div>
            <div
              class="
                w-full
                flex
                items-center
                appearance-none
                bg-white
                border border-gray-200
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
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                class="grow focus:outline-none"
              />
              <button
                @click="togglePassword"
                type="button"
                class="flex items-center"
              >
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
import {
  ref,
  reactive,
  computed,
  useRouter,
  useStore,
} from "@nuxtjs/composition-api";

export default {
  middleware: ["guest"],
  layout: "loginAndRegister",
  setup() {
    const loginForm = reactive({ email: "", password: "", isLogin: true });

    const store = useStore();

    // const errors = store.getters("auth/errors");
    const errors = computed(() => store.getters["auth/errors"]);

    // const router = useRouter();

    // SHOWPASSWORD
    const showPassword = ref(false);
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    // LOGIN FUNCTION
    const login = async () => {
      await store.dispatch("auth/authenticateUser", loginForm);

      // const data = await axios
      //   .post("login", loginForm.value)
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data.access_token) {
      //       Cookies.set(
      //         "access_token",
      //         JSON.stringify(response.data.access_token),
      //         { expires: 1 }
      //       );

      //       router.push("/admin/dashboard");
      //     }
      //     // if (response.data.access_token) {
      //     //   console.log(response.data.access_token);
      //     //   localStorage.setItem(
      //     //     "access_token",
      //     //     JSON.stringify(response.data.access_token)
      //     //   );
      //     // router.push("/admin/dashboard");
      //     // }
      //     return response;
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.message.email);
      //     return err.response.data.message;
      //   });
      // return { data };
    };

    // const isAuth = computed(() => store.state.auth.auth);
    // console.log(isAuth);
    return { loginForm, login, togglePassword, showPassword, errors };
  },
};
</script>

