export interface WeatherInfo {
  current_weather: {
    is_day: number;
    windspeed: number;
    temperature: number;
  };
  current_weather_units: {
    windspeed: number;
    temperature: number;
  };
}
