import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/movies',
      name: 'movies'
    }
  ]
})

export default router
