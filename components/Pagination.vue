<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <li :class="{ disabled: !prev_page_url }">
        <a
          :href="prev_page_url"
          class="
            py-2
            px-3
            ml-0
            leading-tight
            text-gray-500
            bg-white
            rounded-l-lg
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="
            py-2
            px-3
            text-blue-600
            bg-blue-50
            border border-gray-300
            hover:bg-blue-100 hover:text-blue-700
            dark:border-gray-700 dark:bg-gray-700 dark:text-white
          "
          >{{ current_page }}</a
        >
      </li>
      <li :class="{ disabled: !next_page_url }">
        <a
          :href="next_page_url"
          class="
            py-2
            px-3
            leading-tight
            text-gray-500
            bg-white
            rounded-r-lg
            border border-gray-300
            hover:bg-gray-100 hover:text-gray-700
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-gray-700
            dark:hover:text-white
          "
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["current_page", "links_page_url", "prev_page_url", "next_page_url"],
  setup() {},
};
</script>

