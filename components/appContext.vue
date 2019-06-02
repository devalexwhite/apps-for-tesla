<template>
  <popup-container
    style="top: unset; bottom: 0; height: 200px;"
    :visible="visible"
    @close="$store.dispatch('appContext/closeContext')"
  >
    <ul
      class="flex flex-row w-full h-full items-center justify-center list-reset"
    >
      <li>
        <button @click="fullscreen">
          <i class="far fa-compress"></i>
          <span>Fullscreen</span>
        </button>
      </li>
      <li class="danger">
        <button @click="uninstall">
          <i class="far fa-trash-alt"></i>
          <span>Uninstall</span>
        </button>
      </li>
    </ul>
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
      return this.$store.getters['appContext/application']
    },
    visible: {
      get() {
        return this.$store.state.appContext.visible
      },
      set(value) {
        this.$store.commit('appContext/setVisible', value)
      }
    }
  },
  methods: {
    uninstall() {
      this.$store.dispatch('applications/uninstallApplication', this.app.id)
    },
    fullscreen() {
      window.location.href = this.app.href
    }
  }
}
</script>

<style lang="postcss" scoped>
li button {
  @apply flex flex-col items-center justify-center text-grey-darker mx-8;
}
li svg {
  @apply text-5xl mb-4;
}
li.danger svg {
  @apply text-red;
}
li span {
  @apply text-lg font-semibold text-blue-darker;
  color: #555;
}
li.danger span {
  @apply text-red-dark;
}
</style>
