<template>
  <div
    v-long-press="500"
    class="cursor-pointer"
    @long-press-start="$emit('long')"
    @click="$emit('click')"
  >
    <div
      class="shadow-lg mb-6 flex justify-center items-center text-center font-bold tracking-wide overflow-hidden"
      style="width: 200px; height: 200px; font-size: 80px; color: #555555;background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);"
    >
      <div
        v-if="image"
        class="bg-center bg-cover w-full h-full"
        :style="`background-image: url('${image}');`"
      ></div>
      <div v-if="!image">
        {{ initials(title) }}
      </div>
    </div>

    <h3 class="text-black font-semibold text-lg font-normal leading-normal">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    allowIFrame: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: undefined
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

<style></style>
