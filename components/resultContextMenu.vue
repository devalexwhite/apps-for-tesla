<template>
  <div
    v-if="visible"
    role="dialog"
    class="fixed pin-x pin-y z-50 flex justify-center items-center"
    style="background: rgba(0,0,0,0.3);"
    @click="$emit('close')"
  >
    <ul
      class="list-reset w-2/3 bg-grey-darker rounded-lg shadow-lg px-8 py-6 flex flex-row justify-center"
    >
      <li class="">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="star"
          class="svg-inline--fa fa-star fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
        <h3>Favorite</h3>
      </li>
      <li>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="compress-wide"
          class="svg-inline--fa fa-compress-wide fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M500 224H376c-13.3 0-24-10.7-24-24V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v100h100c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12zm-340-24V76c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v100H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 236V312c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm240 0V336h100c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H376c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z"
          ></path>
        </svg>
        <h3>Fullscreen</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="postcss">
li {
  @apply flex flex-col text-white mx-6 justify-center items-center;
}
li > svg {
  @apply mb-2 text-grey-light;
  width: 60px;
  height: 60px;
}
li > h3 {
  @apply text-xl font-semibold;
}
</style>
