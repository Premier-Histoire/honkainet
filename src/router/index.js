import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UidView from '../views/UidView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/u/:optionalParam?',
    name: 'uid',
    component: UidView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;