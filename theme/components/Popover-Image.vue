<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  src: {
    default: "",
  },
  class: {
    default: "",
  },
  attribution: {
    default: "",
  }
})

const isOpen = ref(false)

function setIsOpen(value) {
  isOpen.value = value
  console.log(`isOpen.value:`, isOpen)
}

window.addEventListener(`keydown`, (e) => {
  if (e.key === `x`) {
    setIsOpen(false)
  }
})

</script>

<template>
  <div
    v-if="isOpen"
    class="popover-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
    >
    <div
    class="fixed top-0 left-0 w-full h-full bg-black opacity-60"
      @click="setIsOpen(false)"
    ></div>
    <div
      class="relative z-50 bg-white rounded-md overflow-hidden"
      @click.stop
    >
      <img class="block h-[53vh]" :src="props.src" />
    </div>
  </div>
  <img
    class="cursor-pointer z-30"
    :class="props.class"
    :src="props.src"
    @click="setIsOpen(true)"
    :title="props.attribution"
    >
</template>
