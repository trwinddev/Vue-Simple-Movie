<template>
  <div>
    <header class="header text-white flex justify-center items-center gap-x-5 py-10 mb-5">
      <router-link :to="{ name: 'home' }" class="text-primary">Home</router-link>
      <router-link :to="{ name: 'movies' }">Movies</router-link>
      <router-view></router-view>
    </header>
    <banner type="up_coming"></banner>
    <section class="movies-layout page-container pb-20">
      <h2 class="capitalize text-white mb-5 text-3xl font-bold">Now playing</h2>
      <movie-list type="now_playing"></movie-list>
    </section>
    <section class="movies-layout page-container pb-20">
      <h2 class="capitalize text-white mb-5 text-3xl font-bold">Popular</h2>
      <movie-list type="popular"></movie-list>
    </section>
    <section class="movies-layout page-container pb-20">
      <h2 class="capitalize text-white mb-5 text-3xl font-bold">Top rated</h2>
      <movie-list type="top_rated"></movie-list>
    </section>
  </div>
</template>

<script>
import Banner from './components/banner/Banner.vue'
import MovieList from './components/movie/MovieList.vue'
export default {
  components: { MovieList, Banner },
  setup() {}
}
</script>

<style scoped></style>
