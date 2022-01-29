import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MasterPage from '../components/page/MasterPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MasterPage,
  },
  {
    path: '/search',
    name: 'search',
    // lazy-loaded
    component: () => import(/* webpackChunkName: "search" */ '../components/page/SearchPage.vue'),
  },
  {
    path: '/my-media',
    name: 'media',
    component: () => import('../components/page/MyMedia.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
