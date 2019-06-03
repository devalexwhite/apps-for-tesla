<template>
  <div class="max-w-screen max-h-screen overflow-hidden">
    <app-info />
    <app-launch />
    <app-context />
    <main class="flex flex-row min-h-screen" style="background: #EEEEEE;">
      <aside class="max-w-xs w-1/4">
        <section>
          <navigation />
        </section>
      </aside>
      <section class="flex-1 pt-8 px-16 max-h-screen flex flex-col">
        <header class="mb-8">
          <search-box v-model="query" class="max-w-sm"></search-box>
        </header>
        <h3 style="color: #555;" class="text-xl font-semibold mb-8">
          {{ activeCategory ? activeCategory.title : 'All Applications' }}
        </h3>
        <results />
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '../components/navigation'
import SearchBox from '../components/searchBox'
import Results from '../components/results'
import AppInfo from '../components/appInfo'
import AppLaunch from '../components/appLaunch'
import AppContext from '../components/appContext'
import { AppsService } from '../services/appsService'
import { CategoriesService } from '../services/categoriesService'

export default {
  components: {
    Navigation,
    SearchBox,
    Results,
    AppInfo,
    AppLaunch,
    AppContext
  },
  data: () => ({
    appContainerVisible: false,
    appContextVisible: false,
    selectedApp: {}
  }),
  computed: {
    activeCategory() {
      return this.$store.getters['categories/active']
    },
    query: {
      get() {
        return this.$store.state.searchQuery
      },
      set(value) {
        this.$store.commit('setSearchQuery', value)
      }
    }
  },
  fetch({ store }) {
    const categories = CategoriesService.fetchCategories()
    const apps = AppsService.fetchApps()
    store.commit('applications/setApplications', apps)
    store.commit('categories/setCategories', categories)
    store.dispatch('applications/setInstalled')
  },
  beforeMount() {
    window.oncontextmenu = function(event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  }
}
</script>

<style></style>
