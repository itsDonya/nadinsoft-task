<template>
  <div class="absolute w-full h-full rounded-full rotate-90">
    <clock-hand-second
      :seconds="seconds"
      @seconds-up="secondsUp"></clock-hand-second>
    <clock-hand-minute :minutes="minutes"></clock-hand-minute>
    <clock-hand-hour :minutes="minutes" :hours="hours"></clock-hand-hour>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ClockHandSecond from "./ClockHandSecond.vue";
import ClockHandMinute from "./ClockHandMinute.vue";
import ClockHandHour from "./ClockHandHour.vue";

// variables
const seconds = ref(new Date().getSeconds());
const minutes = ref(new Date().getMinutes());
const hours = ref(new Date().getHours());

// methods
const secondsUp = () => {
  if (seconds.value < 59) {
    seconds.value++;
  } else {
    seconds.value = 0;
    minutesUp();
  }
};
const minutesUp = () => {
  if (minutes.value < 59) {
    minutes.value++;
  } else {
    minutes.value = 0;
    hoursUp();
  }
};
const hoursUp = () => {
  if (hours.value < 23) {
    hours.value++;
  } else {
    hours.value = 0;
  }
};
</script>
