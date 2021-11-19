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
  },
  {
    path: '/mood-navigator',
    name: 'MoodNavigator',
    component: () => import('../views/MoodNavigator.vue'),
  },
  {
    path: '/act',
    name: 'ACT Bot',
    component: () => import('../views/ACT.vue'),
  },
  {
    path: '/scheduler',
    name: 'Scheduler',
    component: () => import('../views/Scheduler.vue'),
  },
  {
    path: '/nav',
    name: 'Navbar',
    component: () => import('../views/Navbar.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'scheduler',
        component: () => import('../views/Scheduler.vue'),
      },
      {
        path: 'act',
        component: () => import('../views/ACT.vue'),
      },
      {
        path: 'group',
        component: () => import('../views/Groups.vue'),
      },
      {
        path: 'schedules',
        component: () => import('../views/Schedules.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
