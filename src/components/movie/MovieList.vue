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
    const fetchMovies = async () => {
      try {
        let apiUrl = ''
        if (props.type === 'now_playing') {
          apiUrl =
            'https://api.themoviedb.org/3/movie/now_playing?api_key=1e736f7376d8b7f90a66c1431257159b'
        } else if (props.type === 'popular') {
          apiUrl =
            'https://api.themoviedb.org/3/movie/popular?api_key=1e736f7376d8b7f90a66c1431257159b'
        } else if (props.type === 'top_rated') {
          apiUrl =
            'https://api.themoviedb.org/3/movie/top_rated?api_key=1e736f7376d8b7f90a66c1431257159b'
        } else if (props.type === 'up_coming') {
          apiUrl =
            'https://api.themoviedb.org/3/movie/upcoming?api_key=1e736f7376d8b7f90a66c1431257159b'
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
