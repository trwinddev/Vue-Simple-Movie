<template>
  <div class="pb-10 page-container">
    <div class="w-full h-[600px] relative">
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>
      <div
        class="w-full h-full bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
      ></div>
    </div>
    <div class="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
      <img :src="posterImageUrl" class="w-full h-full object-cover rounded-lg" alt="" />
    </div>
    <h1 class="text-center text-white text-3xl font-bold mb-10">{{ title }}</h1>
    <div class="flex items-center justify-center gap-x-5 mb-10">
      <span
        class="py-2 px-4 border-primary border text-primary rounded-md"
        v-for="(genre, index) in genres"
        :key="index"
        >{{ genre.name }}</span
      >
    </div>
    <p class="text-white text-center leading-relaxed max-w-[600px] mx-auto mb-10">
      {{ overView }}
    </p>
    <div class="casts mb-10">
      <h2 class="text-white text-center text-3xl mb-10">Casts</h2>
      <div class="grid grid-cols-4 gap-5">
        <div class="cast-item text-white" v-for="(cast, index) in casts.slice(0, 8)" :key="index">
          <img :src="getProfileImageUrl(cast.profile_path)" alt="cast_image" class="w-full" />
          <h2 class="text-white text-xl font-medium">
            {{ cast.name }}
          </h2>
        </div>
      </div>
    </div>
    <div class="trailer flex flex-col gap-10 mb-10">
      <div class="trailer-item" v-for="(video, index) in keyVideos.slice(0, 3)" :key="index">
        <h3 class="mb-5 bg-secondary inline-block text-xl p-3 font-medium">{{ video.name }}</h3>
        <div class="w-full aspect-video">
          <iframe
            width="1049"
            height="599"
            :src="getKeyVideo(video)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="similar">
      <h2 class="text-white capitalize text-3xl mb-10">Similar movie</h2>
      <div class="movie-list grid grid-cols-4 gap-10 pb-10">
        <movie-card
          v-for="(movie, index) in similarMovies"
          :key="index"
          :movie="movie"
        ></movie-card>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/movie/MovieCard.vue'
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieVideo,
  fetchMovieSimilar
} from '../config/api'

export default {
  components: { MovieCard },
  data() {
    return {
      movieId: this.$route.params.movieId,
      backgroundImageUrl: '',
      title: '',
      posterImageUrl: '',
      overView: '',
      genres: [],
      casts: [],
      profilePath: '',
      keyVideos: [],
      similarMovies: []
    }
  },
  created() {
    this.fetchMovieData(this.movieId)
    this.scrollToTop()
  },
  watch: {
    '$route.params.movieId': function (newMovieId) {
      this.fetchMovieData(newMovieId)
      this.scrollToTop()
    }
  },
  methods: {
    async fetchMovieData(movieId) {
      try {
        await this.fetchMovieDetails(movieId)
        await this.fetchMovieCreditsData(movieId)
        await this.fetchMovieVideo(movieId)
        await this.fetchMovieSimilar(movieId)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMovieDetails(movieId) {
      try {
        const movie = await fetchMovieDetails(movieId)

        const backdropPath = movie.backdrop_path
        const titleMovie = movie.title
        const posterPath = movie.poster_path
        const overView = movie.overview
        const genres = movie.genres

        this.backgroundImageUrl = `https://image.tmdb.org/t/p/original/${backdropPath}`
        this.posterImageUrl = `https://image.tmdb.org/t/p/original/${posterPath}`
        this.title = titleMovie
        this.overView = overView
        this.genres = genres
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMovieCreditsData(movieId) {
      try {
        const movie = await fetchMovieCredits(movieId)

        const casts = movie.cast

        this.casts = casts
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMovieVideo(movieId) {
      try {
        const movie = await fetchMovieVideo(movieId)

        const keyVideos = movie.results

        this.keyVideos = keyVideos
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMovieSimilar(movieId) {
      try {
        const movie = await fetchMovieSimilar(movieId)
        const similarMovies = movie.results
        console.log(similarMovies)
        this.similarMovies = similarMovies
      } catch (error) {
        console.log(error)
      }
    },
    getProfileImageUrl(profilePath) {
      if (profilePath) {
        return `https://image.tmdb.org/t/p/original/${profilePath}`
      }
      return ''
    },
    getKeyVideo(video) {
      if (video && video.key) {
        return `https://www.youtube.com/embed/${video.key}`
      }
      return ''
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
