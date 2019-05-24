<template>
  <nav
    class="h-screen w-full shadow-md py-8"
    style="background-color: #FAFAFA;"
  >
    <ul class="list-reset">
      <li
        class="nav-item"
        :active="'Featured Applications' === selectedCategory"
      >
        <button @click="$emit('selectCategory', 'Featured Applications')">
          Featured Applications
        </button>
      </li>
      <li
        v-for="item in categories"
        :key="item"
        class="nav-item"
        :active="item === selectedCategory"
      >
        <button @click="$emit('selectCategory', item)">
          {{ item }}
        </button>
      </li>
    </ul>
    <div
      class="mx-10 rounded-lg mb-4"
      style="height: 3px;background: #B8B8B8;"
    ></div>
    <ul class="list-reset">
      <li class="nav-item"><nuxt-link to="/">Submit App</nuxt-link></li>
      <li class="nav-item">
        <a href="https://twitter.com/AlexWhiteDev">Feedback</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      default: () => new Set(),
      type: Set
    },
    selectedCategory: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="postcss">
li.nav-item {
  @apply text-lg py-4 px-10 overflow-hidden mb-4;
}
li.nav-item[active='true'] {
  background-color: #f4f4f4;
}
li.nav-item > button,
li.nav-item > a {
  @apply font-semibold no-underline;
  color: #b8b8b8;
}
li.nav-item[active='true'] > button,
li.nav-item[active='true'] > a {
  color: #555555;
}
</style>
