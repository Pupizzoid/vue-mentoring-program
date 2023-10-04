import * as VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/movie-details/:id',
    name: 'movie-details',
    props: true,
    component: () => import('@/pages/MoviePage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
