<template>
  <ul class="list-reset grid overflow-x-hidden overflow-y-auto h-full">
    <li v-for="app in apps" :key="app.title">
      <div class="cursor-pointer" @click="$emit('selected', app)">
        <div
          class="shadow-lg mb-6 flex justify-center items-center text-center font-bold tracking-wide overflow-hidden"
          style="width: 200px; height: 200px; font-size: 80px; color: #555555;background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);"
        >
          <div
            v-if="app.image"
            class="bg-center bg-cover w-full h-full"
            :style="`background-image: url('${app.image}');`"
          ></div>
          <div v-if="!app.image">
            {{ initials(app.title) }}
          </div>
        </div>

        <h3 class="text-black font-semibold text-lg font-normal">
          {{ app.title }}
        </h3>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    initials(title = '') {
      return title
        .toUpperCase()
        .split(' ')
        .map(seg => seg[0])
        .join('')
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-column-gap: 40px;
  grid-row-gap: 60px;
}
</style>
