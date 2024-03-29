<template>
  <span
    :class="[
      rotateDeg,
      props.seconds < 59 && props.seconds > 0 ? 'transition-all' : '',
    ]"
    class="absolute top-[50%] right-[50%] h-[2px] before:absolute before:right-0 before:w-24 before:h-full before:bg-rose-900 before:rounded-full z-20"></span>
</template>

<script setup lang="ts">
import { computed } from "vue";

// props
const props = defineProps({
  seconds: {
    type: Number,
    required: true,
    default: 0,
  },
});

// emit
const emit = defineEmits(["seconds-up"]);

// computed
const rotateDeg = computed(() => {
  // calculate rotate degree based on current second
  const degree = 360 / (60 / props.seconds);
  return `rotate-[${degree}deg]`;
});

// methods
const runTimerSeconds = () => {
  setInterval(() => {
    emit("seconds-up");
  }, 1000);
};
runTimerSeconds();
</script>

<style scoped>
span {
  transform-origin: 100%;
}
</style>
