<template>
  <div
    class="relative w-56 h-56 bg-zinc-300/20 flex flex-col items-center justify-center rounded-full shadow-2xl">
    <!-- clock indicators -->
    <clock-indicators></clock-indicators>

    <!-- clock hands -->
    <clock-hands></clock-hands>

    <!-- inner circle -->
    <div class="w-32 h-32 bg-light rounded-full custom-shadow-3"></div>
  </div>
</template>

<script setup lang="ts">
import ClockIndicators from "./ClockIndicators.vue";
import ClockHands from "./ClockHands.vue";
</script>
