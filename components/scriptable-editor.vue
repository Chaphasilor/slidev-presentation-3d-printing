<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
})


let editorText = ref(``)
let intervalId = ref(null)

onMounted(() => {
  console.log(`mounted`)
  intervalId.value = setInterval(() => {
    let iframe = document.querySelector(`#editor-wrapper iframe`)?.contentDocument
    let editor = iframe?.querySelector('#container div')
    if (editor) {
      if (editorText.value !== editor.innerText) {
        editorText.value = editor.innerText
        console.log(`oldText:`, editorText.value)
      }
    }
  }, 500)
})


onBeforeUnmount(() => {
  console.log(`unmounted`)
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})

</script>

<template>
  
</template>



