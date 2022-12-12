<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  src: {
    default: "",
  },
  attribution: {
    default: "",
  },
  badge: {
    default: "",
  },
})

</script>

<template>
  <li
    class="relative w-2/5 h-16 !m-0 !px-4 rounded-md bg-white dark:bg-black shadow-md dark:shadow-white/10 flex flex-row gap-6 items-center overflow-hidden"
    >
    <img
      class="w-12"
      :src="props.src"
      :title="props.attribution"
      >
    <div
      class="w-full h-full flex flex-col justify-center"
    >
      <span><slot></slot></span>
      <span class="inline-block text-[10px] flex flex-row flex-wrap items-center gap-1.5"><slot name="extra"></slot></span>
    </div>
    <div
      v-if="props.badge !== ``"
      v-text="props.badge"
      class="absolute top-3 -right-6 transform rotate-45 bg-red-200 dark:bg-red-900 text-xs leading-4 py-0.5 px-6"
    >
    </div>
  </li>
</template>
