import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Welcome',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/Welcome.vue'),
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: () => import('../views/auth/Index.vue'),
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('../views/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'auth-register',
        component: () => import('../views/auth/Register.vue'),
      },
    ],
  },
  {
    path: '/mood',
    redirect: '/MoodNavigator',
    name: 'MoodNavigator',
    component: () => import('../views/MoodNavigator.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
