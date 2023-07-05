<template>
  <div class="movie-list">
    <swiper :grab-cursor="true" :slides-per-view="3" :space-between="40">
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <movie-card :movie="movie"></movie-card>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import MovieCard from './MovieCard.vue'
import 'swiper/scss'
import { ref } from 'vue'
export default {
  components: { MovieCard, Swiper, SwiperSlide },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const movies = ref([])
    const headUrl = 'https://api.themoviedb.org/3/movie'
    const API_KEY = '1e736f7376d8b7f90a66c1431257159b'
    const fetchMovies = async () => {
      try {
        let apiUrl = ''
        if (props.type === 'now_playing') {
          apiUrl = `${headUrl}/now_playing?api_key=${API_KEY}`
        } else if (props.type === 'popular') {
          apiUrl = `${headUrl}/popular?api_key=${API_KEY}`
        } else if (props.type === 'top_rated') {
          apiUrl = `${headUrl}/top_rated?api_key=${API_KEY}`
        } else if (props.type === 'up_coming') {
          apiUrl = `${headUrl}/upcoming?api_key=${API_KEY}`
        }
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
