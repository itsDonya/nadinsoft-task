// app instance
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";

// pinia
import { createPinia } from "pinia";

// global style
import "./assets/main.css";

// i18n plugin & locales
import { createI18n } from "vue-i18n";
import enLocale from "./locales/en.json";
import faLocale from "./locales/fa.json";

// router
import router from "../routes";

// pinia
const pinia = createPinia();

// i18n
const i18n = createI18n({
  locale: "en", // Default locale
  fallbackLocale: "en", // Fallback locale
  messages: {
    en: enLocale,
    fa: faLocale,
  },
});

// mounting
const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
