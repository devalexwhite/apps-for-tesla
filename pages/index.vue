<template>
  <div class="max-w-screen max-h-screen overflow-hidden">
    <app-container
      :visible="appContainerVisible"
      :app="selectedApp"
      @close="closeAppContainer"
    ></app-container>
    <main class="flex flex-row min-h-screen" style="background: #EEEEEE;">
      <aside class="max-w-xs w-1/5">
        <section>
          <navigation
            :categories="categories"
            :selected-category="selectedCategory"
            @selectCategory="category => (selectedCategory = category)"
          ></navigation>
        </section>
      </aside>
      <section class="flex-1 pt-8 px-16 max-h-screen flex flex-col">
        <header class="mb-8">
          <search-box
            class="max-w-sm"
            @input="value => (query = value)"
          ></search-box>
        </header>
        <h3 style="color: #555;" class="text-xl font-semibold mb-8">
          {{ selectedCategory }}
        </h3>
        <results :apps="filteredApps" @selected="openAppContainer"></results>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '../components/navigation'
import SearchBox from '../components/searchBox'
import Results from '../components/results'
import AppContainer from '../components/appContainer'
import { AppsService } from '../services/appsService'
import { CategoriesService } from '../services/categoriesService'

export default {
  components: {
    AppContainer,
    Navigation,
    SearchBox,
    Results
  },
  data: () => ({
    categories: [],
    selectedCategory: 'All Applications',
    apps: [],
    query: '',
    appContainerVisible: false,
    selectedApp: {}
  }),
  computed: {
    filteredApps: function() {
      return this.apps.filter(app => {
        if (this.selectedCategory !== 'All Applications') {
          if (app.category !== this.selectedCategory) return false
        }
        if (this.query) {
          // eslint-disable-next-line no-console
          console.log(
            app.title.toLowerCase().indexOf(this.query.trim().toLowerCase())
          )
          return (
            app.title.toLowerCase().indexOf(this.query.trim().toLowerCase()) !==
            -1
          )
        }
        return true
      })
    }
  },
  beforeMount() {
    this.apps = AppsService.fetchApps()
    this.categories = CategoriesService.fetchCategories(this.apps)
  },
  methods: {
    closeAppContainer: function() {
      this.appContainerVisible = false
      this.selectedApp = {}
    },
    openAppContainer: function(app) {
      if (app.allowIFrame) {
        this.selectedApp = app
        this.appContainerVisible = true
      } else {
        window.location = app.href
      }
    }
  }
}
</script>

<style></style>
