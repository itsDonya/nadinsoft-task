// global style
import "./assets/main.css";

// app init
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";

// router
import router from "../routes";

// mounting
const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount("#app");
