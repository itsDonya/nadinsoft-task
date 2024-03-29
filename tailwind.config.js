/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [...[...Array(360).keys()].flatMap((i) => `rotate-[${i}deg]`)], // all rotate degrees
};
