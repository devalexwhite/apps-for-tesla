<template>
  <ul class="list-reset grid overflow-x-hidden overflow-y-auto h-full">
    <li v-for="app in apps" :key="app.title">
      <a :href="app.href" class="no-underline cursor-pointer">
        <div
          v-if="app.image"
          class="bg-center bg-cover w-full mb-4"
          :style="
            `background-image: url('${
              app.image
            }');height: 250px;border-radius: 30px;`
          "
        ></div>
        <div
          v-if="!app.image"
          class="w-full mb-4 flex justify-center items-center text-center font-bold tracking-wide overflow-hidden"
          style="font-size: 80px; color: #555555;height: 250px;border-radius: 30px;background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);"
        >
          {{ initials(app.title) }}
        </div>
        <h3 style="color: #555555;" class="text-lg font-normal">
          {{ app.title }}
        </h3>
      </a>
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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 100px;
}
</style>
