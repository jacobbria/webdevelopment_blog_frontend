import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  // You'll need to create this component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LoginModal',
    name: 'Login',
    component: () => import('../views/LoginModal.vue')  // Lazy loading example
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    props: true
  },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
