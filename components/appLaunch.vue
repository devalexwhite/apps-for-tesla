<template>
  <popup-container
    :visible="visible"
    @close="$store.dispatch('appLaunch/closeApp')"
  >
    <iframe class="w-full h-full" :src="app ? app.href : ''" />
  </popup-container>
</template>

<script>
import PopupContainer from './popupContainer'

export default {
  components: {
    PopupContainer
  },
  computed: {
    app: function() {
      return this.$store.getters['appLaunch/application']
    },
    visible: {
      get() {
        return this.$store.state.appLaunch.visible
      },
      set(value) {
        this.$store.commit('appLaunch/setVisible', value)
      }
    }
  }
}
</script>

<style lang="postcss" scoped></style>
