<template>
  <div class="page-container">
    <div class="flex mb-10">
      <div class="flex-1">
        <input
          type="text"
          class="w-full p-4 bg-slate-800 text-white outline-none"
          placeholder="Type here to search..."
          v-model="searchQuery"
          @keydown.enter="searchMovies"
        />
      </div>
      <button class="p-4 bg-primary text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
    <div class="movie-list grid grid-cols-4 gap-10">
      <div v-for="(movie, index) in movies" :key="index">
        <movie-card :movie="movie"></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import MovieCard from '../components/movie/MovieCard.vue'
import { fetchNowPlayingMovies, searchMovie } from '../config/api'

export default {
  components: { MovieCard },
  setup() {
    const movies = ref([])
    const searchQuery = ref('')

    const fetchMoviesData = async () => {
      movies.value = await fetchNowPlayingMovies()
    }
    const searchMovies = async () => {
      if (searchQuery.value.trim() !== '') {
        movies.value = await searchMovie(searchQuery.value)
      } else {
        fetchMoviesData()
      }
    }

    fetchMoviesData()
    return {
      movies,
      searchQuery,
      searchMovies
    }
  }
}
</script>
