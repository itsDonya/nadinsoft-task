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
        allow-clear
        class="w-[90vw] lg:w-[600px]"
        v-model:value="cityName"
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

    <!-- loading -->
    <loading-outlined
      v-if="loading"
      class="text-9xl text-neutral-200"></loading-outlined>

    <!-- result -->
    <div
      v-if="!loading && weatherData"
      class="w-96 p-6 bg-white/30 flex flex-col items-center justify-start gap-4 rounded-2xl">
      <h3 class="text-2xl font-bold text-white">{{ selectedCity }}</h3>

      <img
        class="w-28 drop-shadow-xl"
        :src="`/img/weather/${
          weatherData.current_weather.is_day ? 'sun' : 'moon'
        }.png`"
        :alt="`${weatherData.current_weather.is_day ? 'sun' : 'moon'} image`" />

      <p class="text-lg text-neutral-200">
        {{ weatherData.current_weather.temperature }}
        {{ weatherData.current_weather_units.temperature }}
      </p>

      <p class="text-xl text-neutral-100">
        {{ weatherData.current_weather.windspeed }}
        -
        {{ weatherData.current_weather_units.windspeed }}
        {{
          weatherData.current_weather.windspeed < 15
            ? "Calm"
            : weatherData.current_weather.windspeed < 23
            ? "Breezy"
            : "Stormy"
        }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useWeather } from "../stores/weather";
import locations from "../data/iran-locations.json";
import { LoadingOutlined } from "@ant-design/icons-vue";

// interfaces
import { WeatherInfo } from "../interfaces/weather.interface";

// variables
const cityName = ref<string>("");
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
const loading = computed<boolean>(() => store.loading);
const selectedCity = computed<string>(() => store.cityName);
const weatherData = computed<WeatherInfo>(
  () => store.weatherData as WeatherInfo
);

// methods
const filterOption = (input: string, option: Option) => {
  return option.city.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};
const fetchWeatherData = (): void => {
  store.fetchWeatherData(cityName.value);
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
.ant-select-clear {
  background-color: inherit !important;
  transform: scale(1.5) translateY(-3px) !important;
}
</style>
