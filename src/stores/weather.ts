import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import locations from "../data/iran-locations.json";

interface WeatherInfo {
  current_weather: object;
  current_weather_units: object;
}

export const useWeather = defineStore("weather", () => {
  const cityName = ref("");
  const weatherData = ref(null as WeatherInfo | null);

  const fetchWeatherData = (name: string) => {
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
      .then((data) => (weatherData.value = data));
    // .then((data) => console.log(data));
  };

  return { cityName, weatherData, fetchWeatherData };
});
