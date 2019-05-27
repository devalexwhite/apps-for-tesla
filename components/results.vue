<template>
  <ul class="list-reset grid overflow-x-hidden overflow-y-auto h-full">
    <li v-for="app in apps" :key="app.title">
      <result
        v-bind="app"
        @long="$emit('long', app)"
        @click="$emit('selected', app)"
      />
    </li>
  </ul>
</template>

<script>
import Result from './result'

export default {
  components: {
    Result
  },
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: 40px;
  grid-template-rows: max-content;
  grid-row-gap: 60px;
}
</style>
