<template>
  <div class="w-full">
    <Title :title="title" />
    <table class="table-fixed w-full mt-10">
      <thead class="w-full">
        <tr class="border-b-[1px] text-center">
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CREATED AT</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="account in accounts" :key="account.id">
          <td>{{ account.id }}</td>
          <td>{{ account.name }}</td>
          <td>{{ account.email }}</td>
          <td>{{ account.created_at }}</td>
          <td>
            <button
              class="flex items-center"
              @click="deleteAccount(account.id)"
            >
              <span class="material-icons"> clear </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  ref,
  useRouter,
  useStore,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";
export default {
  layout: "admin",
  setup() {
    const title = "Accounts";
    const store = useStore();

    onMounted(() => {
      store.dispatch("accounts/getAccounts");
    });

    const deleteAccount = (id) => {
      store.dispatch("accounts/deleteAccount", id);
    };

    const accounts = computed(() => store.getters["accounts/accounts"]);
    console.log(accounts);
    return { title, accounts, deleteAccount };
  },
};
</script>

<style>
</style>