<template>
  <div>
    <video
      :id="`embedded-video-${randomId}`"
      :class="`object-cover mx-auto ${props.class}`"
      :poster="props.poster"
      :src="props.src"
      controls muted loop
      @dblclick="refs.video.fullscreen()"
    />
  </div>
</template>

<script setup>

import { ref, computed, watchEffect, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: false
  },
  class: {
    type: String,
    required: false,
    default: ``,
  },
  at: { // v-click offset
    type: Number,
    default: 0,
  },
})

const randomId = Math.random().toString(36).substring(2, 9)

let oldClicks = 0 + props.at

watchEffect(() => {
  let vid = document.querySelector(`#embedded-video-${randomId}`)
  console.log(`vid:`, vid)
  console.log(`$slidev.nav.clicks:`, $slidev.nav.clicks)
  if (vid?.checkVisibility?.()) {

    if ($slidev.nav.clicks === 0 + props.at) {
      
      if (oldClicks === 1 + props.at) {
        vid.pause()
      }
      oldClicks = 0 + props.at
      
    } else if ($slidev.nav.clicks === 1 + props.at) {

      vid.play()
      if (oldClicks === 2 + props.at) {
        document.exitFullscreen()
      }
      oldClicks = 1 + props.at

    } else if ($slidev.nav.clicks === 2 + props.at) {

      if (oldClicks == 1 + props.at) {
        vid.requestFullscreen()
      } else if (oldClicks == 3 + props.at) {
        $slidev.nav.prev()
        $slidev.nav.prev()
      }
      oldClicks = 2 + props.at

    } else if ($slidev.nav.clicks === 3 + props.at) {

      document.exitFullscreen()
      vid.pause()
      oldClicks = 3 + props.at

    }

  }
})

</script>
