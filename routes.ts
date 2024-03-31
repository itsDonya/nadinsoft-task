// vue-router
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// views
import DashboardView from "./src/views/DashboardView.vue";
import ToDoListView from "./src/views/ToDoListView.vue";
import WeatherView from "./src/views/WeatherView.vue";
import ProfileView from "./src/views/ProfileView.vue";

// Define Route Record Raw Array
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/dashboard",
    component: DashboardView,
    meta: { title: "NadinTask | Dashboard" },
  },
  {
    path: "/todo-list",
    component: ToDoListView,
    meta: { title: "NadinTask | To-Do List" },
  },
  {
    path: "/weather",
    component: WeatherView,
    meta: { title: "NadinTask | Weather" },
  },
  {
    path: "/profile",
    component: ProfileView,
    meta: { title: "NadinTask | Profile" },
  },
];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || "Not Found";
  next();
});

export default router;
