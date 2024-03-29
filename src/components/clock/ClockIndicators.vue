<template>
  <div class="absolute bg-none w-full h-full rounded-full">
    <span :class="[defaultStyle]" class=""></span>
    <span :class="[defaultStyle]" class="rotate-90"></span>
    <span :class="[defaultStyle]" class="rotate-180"></span>
    <span :class="[defaultStyle]" class="-rotate-90"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// variables
const defaultStyle = ref(
  "absolute bottom-[50%] top-[50%] w-full h-[1px] before:absolute before:left-0 before:w-4 before:h-full before:bg-neutral-300"
);
</script>
