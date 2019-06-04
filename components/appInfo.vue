<template>
  <popup-container
    :visible="visible"
    class="max-w-3xl mx-auto mt-32"
    @close="$store.dispatch('appInfo/hideApp')"
  >
    <article class="flex flex-col px-12 pb-6 h-full overflow-auto">
      <header>
        <h1
          class="mb-12 text-5xl font-semibold"
          v-text="app ? app.title : ''"
        />
      </header>
      <div class="flex flex-row items-center mb-12">
        <button
          class="bg-purple-darker text-white no-underline rounded-full py-3 px-16 flex justify-center items-center font-semibold text-lg mr-12"
          @click="install"
        >
          Install
        </button>
        <!-- <button class="mr-8 font-semibold text-blue-darker">
          👍 {{ upvotePercent }}%
        </button>
        <button class="mr-8 font-semibold text-blue-darker">
          👎 {{ downvotePercent }}%
        </button> -->
      </div>
      <p
        class="text-xl tracking-normal max-w-lg font-normal text-grey-darker leading-normal"
        v-text="app ? app.description : ''"
      />
    </article>
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
      return this.$store.getters['appInfo/application']
    },
    visible: {
      get() {
        return this.$store.state.appInfo.visible
      }
    },
    upvotePercent: function() {
      return this.totalVotes > 0
        ? Math.round((this.app.upvotes / this.totalVotes) * 100)
        : 0
    },
    downvotePercent: function() {
      return this.totalVotes > 0
        ? Math.round((this.app.downvotes / this.totalVotes) * 100)
        : 0
    },
    totalVotes: function() {
      return this.app ? this.app.upvotes + this.app.downvotes : 0
    }
  },
  methods: {
    install() {
      this.$store.dispatch('applications/installApplication', this.app.id)
    }
  }
}
</script>

<style></style>
