import { createRouter, createWebHistory } from 'vue-router';
import SearchComponent from '../components/SearchComponent.vue';
import ProfileComponent from '../components/ProfileComponent.vue';

const routes = [
  { path: '/', component: SearchComponent },
  { path: '/profile/:id', component: ProfileComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
