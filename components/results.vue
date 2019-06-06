<template>
  <div class="overflow-y-auto w-full">
    <ul
      v-if="apps.length"
      class="list-reset grid overflow-x-visible overflow-y-auto px-10 mb-12"
    >
      <li v-for="app in apps" :key="app.id">
        <result v-bind="app" @click="selectApp(app.id)" />
      </li>
    </ul>
    <div v-if="!apps.length">
      <div class="flex flex-row items-center">
        <span class="mr-3 block">
          <i class="far fa-box-open" style="color: #555555;"></i>
        </span>
        <h3 class="text-xl font-semibold" style="color: #555555;">
          No uninstalled applications found
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Result from './result'

export default {
  components: {
    Result
  },
  computed: {
    apps() {
      return this.$store.getters['applications/filtered']
    },
    installedIds() {
      return this.$store.state.applications.installed
    }
  },
  methods: {
    selectApp(appId) {
      if (this.appIsInstalled(appId))
        this.$store.dispatch('appLaunch/launchApp', appId)
      else this.$store.dispatch('appInfo/showApp', appId)
    },
    appIsInstalled(appId) {
      return this.installedIds.includes(appId)
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 170px);
  grid-column-gap: 40px;
  grid-template-rows: max-content;
  grid-row-gap: 60px;
}
</style>
