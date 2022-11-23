<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  image: {
    default: '',
  },
  attribution: {
    default: '',
  },
})

</script>

<template>
  <div class="relative slidev-layout image-bottom">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div>
      <img class="slidev-image" :src="props.image" />
      <span class="attribution">{{ props.attribution }}</span>
    </div>
  </div>
</template>
