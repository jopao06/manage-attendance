import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "", name: "home", component: () => import("../views/Attendance.vue") },
    { path: "/company", name: "company", component: () => import("../views/Company.vue") },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;