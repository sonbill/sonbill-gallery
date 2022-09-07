<template>
  <!-- <div class="modal-overlay">
    <div @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <div>
          <Title :title="title" />
          <button @click="$emit('close-modal')" type="button">
            <span class="material-icons"> clear </span>
          </button>
        </div>
      </div>

      <div @click.stop>
        <form>
          <input type="text" class="border p-3" placeholder="Input" />
        </form>
      </div>
    </div>
  </div> -->
  <!-- MODAL OVERLAY -->
  <div class="modal-overlay" @click="$emit('close-modal')">
    <!-- MODAL -->
    <div class="modal" @click.stop>
      <!-- BUTTON -->
      <div class="text-right mr-10">
        <button @click="$emit('close-modal')">
          <span class="material-icons"> clear </span>
        </button>
      </div>
      <Title :title="title" />
      <form class="mt-10" @submit.prevent="update">
        <div>
          <input
            type="text"
            class="
              p-3
              appearance-none
              bg-white
              border border-gray-400
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

          <button
            type="submit"
            class="text-white bg-black font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
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
  setup() {
    const title = "Update";

    const store = useStore();

    const update = async (id) => {
      await store.dispatch("category/updateCategory", id);
    };

    return { title, update };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}
</style>