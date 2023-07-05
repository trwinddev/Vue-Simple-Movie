<template>
  <div class="page-container">
    <div class="flex mb-10">
      <div class="flex-1">
        <input
          type="text"
          class="w-full p-4 bg-slate-800 text-white outline-none"
          placeholder="Type here to search..."
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
    <div class="grid grid-cols-4 gap-10">
      <div v-for="(movie, index) in movies" :key="index">
        <movie-card :movie="movie"></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/scss'
import { ref } from 'vue'
import MovieCard from '../components/movie/MovieCard.vue'
export default {
  components: { MovieCard },
  // props: {
  //   type: {
  //     type: String,
  //     required: true
  //   }
  // },
  setup() {
    const movies = ref([])
    const headUrl = 'https://api.themoviedb.org/3/movie'
    const API_KEY = '1e736f7376d8b7f90a66c1431257159b'
    const fetchMovies = async () => {
      try {
        let apiUrl = `${headUrl}/popular?api_key=${API_KEY}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        movies.value = data.results
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()

    return {
      movies
    }
  }
}
</script>
