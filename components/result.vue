<template>
  <div class="cursor-pointer select-none relative" @click="$emit('click')">
    <div
      v-if="installed"
      class="pin-t pin-r absolute bg-white rounded-full flex flex-col justify-center items-center mt-2 mr-2"
      style="width: 40px;height:40px;"
      @click.stop="$store.dispatch('appContext/launchContext', app.id)"
    >
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    <div
      class="shadow-lg mb-6 flex justify-center items-center text-center font-bold tracking-wide overflow-hidden"
      style="width: 100%; height: 250px; font-size: 80px; color: #555555;background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);"
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

    <h3 class="text-black font-semibold text-lg font-normal leading-normal">
      {{ app.title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    app() {
      return this.$store.state.applications.all.find(
        app => app.id === this.$props.id
      )
    },
    installed() {
      return this.$store.state.applications.installed.includes(this.$props.id)
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

<style lang="postcss">
.dot {
  @apply rounded-full bg-grey-darker;
  margin-bottom: 2px;
  width: 6px;
  height: 6px;
}
</style>
