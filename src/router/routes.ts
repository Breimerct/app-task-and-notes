import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../pages/user/profile.vue')
      }
    ],
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/login/register.vue')
  },
  {
    path: '/recover-password',
    name: 'recoverPass',
    component: () => import('./../pages/login/recoverPassword.vue')
  },
  {
    path: '/email-verified',
    name: 'email-verified',
    component: () => import('../pages/login/emailVerified.vue')
  },
  {
    path: '**',
    name: '404',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
