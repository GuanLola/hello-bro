import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Treeshaking',
    name: 'Treeshaking',
    component: () => import('../views/Treeshaking.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
