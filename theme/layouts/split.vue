<template>
  <div class="slidev-layout split">
    <slot />
    <div class="my-auto h-5/6 pt-16 grid grid-cols-2 gap-4 place-items-start justify-items-start">
      <slot name="left" />
      <slot name="right" />
    </div>
  </div>
</template>
