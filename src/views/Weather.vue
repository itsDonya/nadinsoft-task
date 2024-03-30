<template>
  <section
    class="w-full h-full p-8 flex flex-col items-center justify-start gap-12">
    <!-- title -->
    <h1 class="w-full text-start text-xl text-neutral-300">
      <strong>Weather</strong>
    </h1>

    <!-- auto-complete input -->
    <a-flex vertical align="start" justify="start" gap="10">
      <label class="text-base text-white">City:</label>
      <a-auto-complete
        class="w-[90vw] lg:w-[600px]"
        v-model:value="selectedcity"
        :options="options"
        placeholder="Enter city name:"
        :filter-option="filterOption" />
      <a-button
        type="text"
        @click="fetchWeatherData"
        class="text-white bg-white/50 hover:!text-white hover:!bg-white/60 shadow-md hover:shadow-sm shadow-black/10"
        >Search</a-button
      >
    </a-flex>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useWeather } from "../stores/weather";
import locations from "../data/iran-locations.json";

// variables
const selectedcity = ref("");
const store = useWeather();

// interfaces
interface Option {
  city: string;
}

// computed
const options = computed(() => {
  let options: object[] = [];

  for (let location of locations) {
    options.push({
      ...location,
      value: location.city,
    });
  }

  return options;
});

// methods
const filterOption = (input: string, option: Option) => {
  return option.city.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};
const fetchWeatherData = () => {
  store.fetchWeatherData(selectedcity.value);
};
</script>

<style>
.ant-select-selector * {
  color: #00000090 !important;
}
.ant-select-selector *:focus {
  color: #000000 !important;
}
.ant-select-selector {
  padding: auto 12px !important;
  font-size: 16px !important;
  background-color: #f7f7f780 !important;
}
</style>
