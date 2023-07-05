<template>
  <div
    className="h-full movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none text-white "
  >
    <img
      :src="getMoviePosterUrl()"
      alt=""
      className="w-full h-auto
    object-cover rounded-lg mb-5"
    />
    <div class="flex flex-col flex-1">
      <h3 className="font-bold text-xl mb-3">{{ movie.title }}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{{ getYear() }}</span>
        <span>{{ movie.vote_average }}</span>
      </div>
      <button className="mt-auto py-3 px-6 rounded-lg capitalize bg-primary w-full">
        Watch now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
    getMoviePosterUrl() {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
      }
      return ''
    },
    getYear() {
      if (this.movie.release_date) {
        const releaseYear = new Date(this.movie.release_date).getFullYear()
        return releaseYear
      }
      return ''
    }
  }
}
</script>
