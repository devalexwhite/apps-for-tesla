<template>
  <nav class="h-screen w-full py-8" style="background-color: #FAFAFA;">
    <ul class="list-reset">
      <li class="nav-item" :active="-1 === activeCategoryId">
        <i class="far fa-save"></i>
        <button v-if="hasInstalled" @click="setActive(-1)">
          Installed
        </button>
      </li>
      <li class="nav-item" :active="0 === activeCategoryId">
        <i class="far fa-store"></i>
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
        <i v-if="category.icon" :class="`far fa-${category.icon}`"></i>
        <button @click="setActive(category.id)">
          {{ category.title }}
        </button>
      </li>
    </ul>
    <div
      class="mx-10 rounded-lg mb-4"
      style="height: 2px;background: #B8B8B8;"
    ></div>
    <ul class="list-reset">
      <li class="nav-item"><nuxt-link to="/submit">Submit App</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/feedback">Feedback</nuxt-link></li>
    </ul>
    <div
      class="mx-10 rounded-lg mb-4"
      style="height: 2px;background: #B8B8B8;"
    ></div>
    <ul class="list-reset">
      <li class="nav-item">
        <nuxt-link to="/support">
          Support the Developer
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
  @apply text-lg py-4 px-10 overflow-hidden mb-4;
}
li.nav-item > svg {
  @apply mr-1 text-xl;
  color: #b8b8b8;
}
li[active='true'].nav-item > svg {
  @apply mr-1 text-blue-darker text-xl;
}
li.nav-item[active='true'] {
  background-color: #eee;
}
li.nav-item > button,
li.nav-item > a {
  @apply font-semibold no-underline text-left;
  color: #b8b8b8;
}
li.nav-item[active='true'] > button,
li.nav-item[active='true'] > a {
  @apply text-black leading-normal;
}
</style>
