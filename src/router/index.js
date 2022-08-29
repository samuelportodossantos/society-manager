import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView'
import DashboardView from '@/views/auth/DashboardView'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
