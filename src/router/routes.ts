import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/dashboard',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/profile',
        name:'profile',
        component: () => import('../pages/user/profile.vue')
      }
    ],
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    component: () => import('pages/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/login/register.vue')
  },
  {
    path: '**',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
