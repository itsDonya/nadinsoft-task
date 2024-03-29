<template>
  <section
    class="w-full h-full py-12 flex flex-col items-center justify-center gap-12">
    <!-- welcome text -->
    <h2 class="text-lg lg:text-2xl text-neutral-200 font-mono">
      Welcome, Donya Davoodi :)
    </h2>

    <!-- you can find clock-related components here: @/components/clock -->
    <the-clock></the-clock>

    <!-- message -->
    <div
      class="w-96 h-auto bg-neutral-800/40 p-3 flex flex-col items-start justify-start gap-2 rounded-xl shadow-xl">
      <p class="text-sm text-white/70">
        {{ currentHour || "Midnight" }}
        {{ currentHour ? (currentHour < 12 ? "AM" : "PM") : "" }} Mood >>>
      </p>

      <p class="text-white italic">"{{ currentMessage }}"</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTime } from "../composables/useTime";
import TheClock from "../components/clock/TheClock.vue";

// variables
const { currentHour, currentMessage } = useTime();
</script>
