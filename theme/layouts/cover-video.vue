<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  video: {
    default: '',
  },
  type: {
    default: 'mp4',
  },
  attribution: {
    default: '',
  },
})

</script>

<template>
  <div class="relative slidev-layout cover-video bg-black">
    <div class="z-10 text-white absolute bottom-0 left-0 transform -rotate-90 -translate-y-64 -translate-x-40 leading-20">
      <slot />
    </div>
    <div>
      <video class="!fixed top-0 left-0 w-full h-full !z-5 opacity-90" autoplay loop>
        <source :src="props.video" :type="`video/${props.type}`">
      </video>
      <a class="fixed bottom-4 right-4 z-20 text-xs text-gray-500 !hover:text-gray-200" :href="props.attribution">{{ props.attribution }}</a>
    </div>
  </div>
</template>
