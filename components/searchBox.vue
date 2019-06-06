<template>
  <div
    class="flex flex-row rounded-lg shadow-md bg-white w-full items-center px-6"
    style="background: rgba(255,255,255,0.5);"
  >
    <div class="text-xl mr-6" style="color: #a5a5a5;">
      <i class="fas fa-search "></i>
    </div>
    <input
      class="font-semibold text-2xl w-full h-full py-6"
      placeholder="Search"
      style="color: #a5a5a5;background: rgba(255,255,255,0);"
      :value="value"
      @input="event => $emit('input', event.target.value)"
    />
    <div class="text-xl ml-6" style="color: #a5a5a5;">
      <i class="fas fa-chevron-right "></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
