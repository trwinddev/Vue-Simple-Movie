<template>
  <banner></banner>
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
</template>

<script>
import Banner from '../components/banner/Banner.vue'
import MovieList from '../components/movie/MovieList.vue'
export default {
  components: { MovieList, Banner }
}
</script>
