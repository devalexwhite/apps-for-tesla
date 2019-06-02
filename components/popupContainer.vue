<template>
  <div
    v-if="visible"
    class="fixed pin-x pin-y z-50 bg-white mt-4 mx-4 shadow-lg overflow-hidden"
    style="border-radius: 30px 30px 0 0;"
    role="dialog"
  >
    <section class="w-full h-full flex flex-col">
      <header class="w-full px-8 py-6 flex flex-row justify-center">
        <div
          class="mx-10 rounded-lg w-32 cursor-pointer"
          style="height: 8px;background: #B8B8B8;"
          @click="$emit('close')"
        ></div>
      </header>
      <div class="w-full flex-1">
        <slot />
      </div>
      <!-- <iframe v-if="visible" :src="app.href" class="w-full flex-1"></iframe> -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    app: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
