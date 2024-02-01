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
    class="flex flex-col !m-0 !px-2 py-4 rounded-md bg-white dark:bg-black shadow-md dark:shadow-white/10 gap-6 items-center overflow-hidden"
    >
    <img
      class="size-48 object-cover rounded-xl"
      :src="props.src"
      :title="props.attribution"
      >
    <div
      class="w-full h-full flex flex-col justify-center text-center font-semibold leading-6"
    >
      <span class="pb-4"><slot></slot></span>
      <span class="inline-block text-xs flex flex-col justify-center flex-wrap items-center gap-1.5"><slot name="extra"></slot></span>
    </div>
    <div
      v-if="props.badge !== ``"
      v-text="props.badge"
      class="absolute top-3 -right-6 transform rotate-45 bg-red-200 dark:bg-red-900 text-xs leading-4 py-0.5 px-6"
    >
    </div>
  </li>
</template>
