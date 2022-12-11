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
  if (e.key === `Escape`) {
    setIsOpen(false)
  }
})

</script>

<template>
  <div
    v-if="isOpen"
    class="fixed h-full inset-0 z-50 flex items-center justify-center"
    >
    <div
    class="fixed h-full inset-0 bg-black opacity-60"
      @click="setIsOpen(false)"
    ></div>
    <div
      class="relative z-50 bg-white rounded-md overflow-hidden"
      @click.stop
    >
      <img class="block h-[60vh]" :src="props.src" />
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
