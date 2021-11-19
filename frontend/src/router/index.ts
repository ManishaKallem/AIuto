import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
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
    path: '/chat-temp',
    name: 'chat',
    component: () => import('../views/Chat.vue'),
  },
  {
    path: '',
    component: () => import('../views/NavbarView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'stats',
        component: () => import('../views/Stats.vue'),
      },
      {
        path: '/act',
        component: () => import('../views/ACT.vue'),
      },
      {
        path: 'create-group',
        component: () => import('../views/CreateGroup.vue'),
      },
      {
        path: 'mood-navigator',
        component: () => import('../views/MoodNavigator.vue'),
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
      {
        path: 'therapy',
        component: () => import('../views/Therapy.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
