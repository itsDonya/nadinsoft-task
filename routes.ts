// vue-router
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// views
import DashboardView from "./src/views/DashboardView.vue";
import ToDoListView from "./src/views/ToDoListView.vue";

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
];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
