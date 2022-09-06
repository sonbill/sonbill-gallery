<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-full md:w-1/2">
      <div class="w-[20px] h-[20px]">
        <!-- <Notification :messages="messages" /> -->
      </div>
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
            <input
              v-model="registerForm.email"
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
            <div
              class="
                flex
                items-center
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
            >
              <input
                v-model="registerForm.password"
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
            <div
              class="
                flex
                items-center
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
            >
              <input
                v-model="registerForm.password_confirmation"
                :type="PasswordConfirmation ? 'text' : 'password'"
                placeholder="Confirm Password"
                class="grow focus:outline-none"
              />
              <button
                @click="togglePasswordConfirmation"
                class="flex items-center"
              >
                <span v-if="PasswordConfirmation" class="material-icons">
                  visibility
                </span>
                <span v-else class="material-icons"> visibility_off </span>
              </button>
            </div>
          </div>
        </form>
        <div>
          <button
            @click="register"
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


<script>
import {
  ref,
  reactive,
  computed,
  useRouter,
  useStore,
} from "@nuxtjs/composition-api";
import axios from "axios";

export default {
  // components: { Notification },
  middleware: ["guest"],
  layout: "loginAndRegister",

  setup() {
    const store = useStore();

    const router = useRouter();

    const showPassword = ref(false);
    const PasswordConfirmation = ref(false);

    // let messages = [];

    // SHOW PASSWORD
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    // SHOW PASSWORD CONFIRMATION
    const togglePasswordConfirmation = () => {
      PasswordConfirmation.value = !PasswordConfirmation.value;
    };

    const registerForm = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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

    // REGISTER FUNCTION
    const register = async () => {
      await store
        .dispatch("auth/authenticateUser", registerForm)
        .then((response) => {
          console.log(response.data.message);
          router.push("/login");
        });

      // const data = await axios
      //   .post("register", registerForm.value)
      //   .then((response) => {
      //     console.log(response);
      //     return response.data;
      //   })
      //   .catch((err) => {
      //     let messages = err.response.data.message;
      //     console.log(err.response.data.message);
      //     return messages;
      //   });
      // // console.log(data);
      // return { data, messages };
    };

    return {
      // messages,
      register,
      registerForm,
      showPassword,
      PasswordConfirmation,
      togglePasswordConfirmation,
      togglePassword,
    };
  },
};
</script>