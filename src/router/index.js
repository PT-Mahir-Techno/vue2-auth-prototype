import Vue from 'vue'
import VueRouter from 'vue-router'

import { getUserInfo } from '@/helper'

import AuthLayout from '@/layouts/AuthLayout'
import AdminLayout from '@/layouts/AdminLayout'

import Login from '@/views/Login'
import Register from '@/views/Register'

import Dashboard from '@/views/Dashboard'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/auth/login' },

  { path: '/auth', component: AuthLayout, // children nya dikasih / kalau mau tanpa prefix. contoh: ganti path login menjadi /login
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
    beforeEnter (to, from, next) {
      if (getUserInfo().access_token) next('/admin/dashboard')
      else next()
    }
  },

  { path: '/admin', component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
    ],
    beforeEnter (to, from, next) {
      if (getUserInfo().access_token) next()
      else next('/auth/login')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
