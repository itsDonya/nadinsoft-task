<template>
  <span
    :class="[rotateDeg]"
    class="absolute top-[50%] w-1/2 h-0.5 before:absolute before:right-0 before:w-14 before:h-full before:bg-neutral-300 before:rounded-full transition-all z-10"></span>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// variables
const degree = ref(0);

// props
const props = defineProps({
  minutes: {
    type: Number,
    required: true,
    default: 0,
  },
  hours: {
    type: Number,
    required: true,
    default: 0,
  },
});

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current hour
  if (props.hours < 13) {
    degree.value = 360 / (12 / props.hours);
  } else {
    degree.value = 360 / (12 / (props.hours - 12));
  }
  const x = Math.round(30 / (60 / props.minutes));
  return `rotate-[${degree.value + x}deg]`;
});
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
