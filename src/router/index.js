import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MoviePage from '../pages/MoviePage.vue'
import MovieDetailPage from '../pages/MovieDetailPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviePage
    },
    {
      path: '/movies/:movieId',
      name: 'movieDetail',
      component: MovieDetailPage
    }
  ]
})

export default router
