import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // 수정: Home 컴포넌트 임포트
import Expense from '../pages/Expense.vue';
import Income from '../pages/Income.vue';
import Total from '../pages/Total.vue';

const routes = [
  { path: '/', name: 'home', component: Home }, // 수정: Home 컴포넌트 등록
  { path: '/expense', name: 'expense', component: Expense },
  { path: '/income', name: 'income', component: Income },
  { path: '/total', name: 'total', component: Total },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;