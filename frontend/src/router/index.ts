import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/message/:id",
    component: () => import("../views/ViewMessage.vue"),
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("../views/auth/Index.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/auth/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
