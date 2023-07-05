<template>
  <section class="banner h-[500px] page-container mb-10 overflow-hidden">
    <swiper :grab-cursor="true" slides-per-view="auto">
      <swiper-slide v-for="(movie, index) in movies" :key="index">
        <banner-item :movie="movie"></banner-item>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import BannerItem from './BannerItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import { ref } from 'vue'

export default {
  components: { BannerItem, Swiper, SwiperSlide },
  setup() {
    const movies = ref([])
    const headUrl = 'https://api.themoviedb.org/3/movie'
    const API_KEY = '1e736f7376d8b7f90a66c1431257159b'
    const fetchMovies = async () => {
      try {
        const apiUrl = `${headUrl}/upcoming?api_key=${API_KEY}`
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
