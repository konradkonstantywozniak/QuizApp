import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import Quiz from './views/QuizView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: Quiz },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
