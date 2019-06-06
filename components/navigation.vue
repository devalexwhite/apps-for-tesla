<template>
  <nav
    class="h-screen w-full relative pt-12 overflow-y-auto"
    style="background-color: #FAFAFA;"
  >
    <h3 class="text-3xl mb-12 text-black font-bold px-10">Applications</h3>
    <ul class="list-reset">
      <li
        v-if="hasInstalled"
        class="nav-item"
        :active="-1 === activeCategoryId"
      >
        <i class="fas fa-car"></i>
        <button @click="setActive(-1)">
          Installed
        </button>
      </li>
      <li class="nav-item" :active="0 === activeCategoryId">
        <i class="fas fa-store"></i>
        <button @click="setActive(0)">
          All Applications
        </button>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="nav-item"
        :active="category.id === activeCategoryId"
      >
        <i v-if="category.icon" :class="`fas fa-${category.icon}`"></i>
        <button @click="setActive(category.id)">
          {{ category.title }}
        </button>
      </li>
    </ul>
    <div
      class="mx-10 rounded-lg mb-4"
      style="height: 2px;background: #a5a5a5;"
    ></div>
    <ul class="list-reset">
      <li class="nav-item"><nuxt-link to="/submit">Submit App</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/feedback">Feedback</nuxt-link></li>
    </ul>
    <div
      class="mx-10 rounded-lg mb-4"
      style="height: 2px;background: #a5a5a5;"
    ></div>
    <ul class="list-reset">
      <li class="nav-item">
        <nuxt-link to="/support">
          <i class="fas fa-coffee"></i>
          Support the Dev
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    activeCategoryId() {
      return this.$store.state.categories.active
    },
    categories() {
      return this.$store.state.categories.all
    },
    hasInstalled() {
      return this.$store.getters['applications/hasInstalled']
    }
  },
  mounted() {
    if (this.hasInstalled) this.setActive(-1)
  },
  methods: {
    ...mapMutations({ setActive: 'categories/setActive' })
  }
}
</script>

<style lang="postcss">
li.nav-item {
  @apply text-2xl py-2 px-10 overflow-hidden mb-6 flex flex-row items-center;
}
li.nav-item svg {
  @apply mr-4 text-3xl;
  width: 40px;
  color: #a5a5a5;
}
li[active='true'].nav-item svg {
  @apply text-black;
}
li.nav-item[active='true'] {
  background-color: #eee;
}
li.nav-item > button,
li.nav-item > a {
  @apply font-normal no-underline text-left;
  color: #a5a5a5;
}
li.nav-item[active='true'] > button,
li.nav-item[active='true'] > a {
  @apply text-black;
}
</style>
