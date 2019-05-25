<template>
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
          class="max-w-xs"
          @input="value => (query = value)"
        ></search-box>
      </header>
      <h3 style="color: #555;" class="text-xl font-semibold mb-8">
        {{ selectedCategory }}
      </h3>
      <results :apps="filteredApps"></results>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/navigation'
import SearchBox from '../components/searchBox'
import Results from '../components/results'
import { AppsService } from '../services/appsService'
import { CategoriesService } from '../services/categoriesService'

export default {
  components: {
    Navigation,
    SearchBox,
    Results
  },
  data: () => ({
    categories: [],
    selectedCategory: 'All Applications',
    apps: [],
    query: ''
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
  }
}
</script>

<style></style>
