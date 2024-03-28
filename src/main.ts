// global style
import "./assets/main.css";

// app init
import { createApp } from "vue";
import App from "./App.vue";

// vue-router
import { createRouter, createWebHistory } from "vue-router";

// views
import DashboardView from "../views/DashboardView.vue";

// router
const routes = [{ path: "/", component: DashboardView }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// mounting
const app = createApp(App);
app.use(router);
app.mount("#app");
