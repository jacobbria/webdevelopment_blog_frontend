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

    path: '/signupvalidation',
    name: 'Signupvalidation',
    component: () => import('../views/signupvalidation.vue'),
  },
  {
    path: '/UserProfile',
    name: 'userprofile',
    component: () => import('../views/UserProfile.vue'),
  },
    {
    path: '/testPage',
    name: 'testpage',
    component: () => import('../views/testPage.vue'),
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/accountsettings',
    name: 'settings',
    component: () => import('../views/account_Views/AccountSettings.vue'),
  },



  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
