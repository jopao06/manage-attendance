import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/Attendance.vue") },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;