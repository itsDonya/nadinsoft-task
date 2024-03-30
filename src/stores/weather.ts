import { ref } from "vue";
import { defineStore } from "pinia";
import { message } from "ant-design-vue";
import locations from "../data/iran-locations.json";

export const useWeather = defineStore("weather", () => {
  const weatherData = ref(null);

  const fetchWeatherData = (cityName: string) => {
    // find city's lat & lng
    const identifiedCity = locations.find(
      (location) => location.city == cityName
    );
    if (!identifiedCity) {
      message.error("Location not found: Invalid name");
      return;
    }

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${identifiedCity.lat}&longitude=${identifiedCity.lng}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return { weatherData, fetchWeatherData };
});
