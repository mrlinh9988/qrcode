import Vue from 'vue';
import VueRouter from 'vue-router';
import CodeGeneration from '../views/CodeGeneration.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CodeGeneration',
    component: CodeGeneration,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
