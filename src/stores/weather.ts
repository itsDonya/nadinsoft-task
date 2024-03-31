import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import locations from "../data/iran-locations.json";

// interfaces
import { WeatherInfo } from "../interfaces/weather.interface";

export const useWeather = defineStore("weather", () => {
  const loading = ref<boolean>(false);
  const cityName = ref<string>("");
  const weatherData = ref<WeatherInfo | null>(null);

  const fetchWeatherData = (name: string) => {
    // start loading
    loading.value = true;

    // find city's lat & lng
    const identifiedCity = locations.find((location) => location.city == name);
    if (!identifiedCity) {
      message.error("Location not found: Invalid name");
      return;
    }

    // set city name
    cityName.value = name;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${identifiedCity.lat}&longitude=${identifiedCity.lng}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        weatherData.value = data;
        loading.value = false;
      })
      .catch((error) => {
        message.error("An error occurred: ", error);
        loading.value = false;
      });
  };

  return { loading, cityName, weatherData, fetchWeatherData };
});
