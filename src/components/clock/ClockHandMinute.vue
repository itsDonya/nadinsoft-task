<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] w-1/2 h-0.5 before:absolute before:right-0 before:w-20 before:h-full before:bg-neutral-300 before:rounded-full transition-all z-10"></span>
</template>

<script setup lang="ts">
import { computed } from "vue";

// props
const props = defineProps({
  minutes: {
    type: Number,
    required: true,
    default: 0,
  },
});

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current minute
  const degree = 360 / (60 / props.minutes);
  return `rotate-[${degree}deg]`;
});
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
