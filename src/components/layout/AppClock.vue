<template>
  <div
    class="w-full h-full py-8 flex flex-col items-center justify-center gap-20">
    <!-- welcome text -->
    <h2 class="text-2xl text-neutral-200 font-mono">
      Welcome, Donya Davoodi :)
    </h2>

    <!-- clock -->
    <the-clock></the-clock>
  </div>
</template>

<script setup lang="ts">
import TheClock from "../../components/clock/TheClock.vue";
</script>
