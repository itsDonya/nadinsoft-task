// app instance
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";

// pinia
import { createPinia } from "pinia";

// global style
import "./assets/main.css";

// router
import router from "../routes";

// pinia
const pinia = createPinia();

// mounting
const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(pinia);

app.mount("#app");
