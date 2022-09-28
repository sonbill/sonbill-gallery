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
            <!-- INPUT / EMAIL -->
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
            <!-- INPUT / NAME -->
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
                type="button"
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
        <div v-if="errors" class="text-red-500">
          <p>
            {{ errors.message }}
          </p>
        </div>
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

    const registerForm = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });

    // SHOW PASSWORD
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    // SHOW PASSWORD CONFIRMATION
    const togglePasswordConfirmation = () => {
      PasswordConfirmation.value = !PasswordConfirmation.value;
    };

    // REGISTER FUNCTION
    const register = async () => {
      await store
        .dispatch("auth/authenticateUser", registerForm)
        .then((response) => {
          console.log(response.data.message);
          router.push("/login");
        });
    };
    const errors = computed(() => store.getters["auth/errors"]);

    return {
      // messages,
      register,
      errors,
      registerForm,
      showPassword,
      PasswordConfirmation,
      togglePasswordConfirmation,
      togglePassword,
    };
  },
};
</script>