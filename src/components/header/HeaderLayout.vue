<template>
  <header class="header text-white flex justify-center items-center gap-x-5 py-10 mb-5">
    <router-link to="/" :class="isActiveLink('home') ? 'text-primary font-bold' : ''">
      Home
    </router-link>
    <router-link to="/movies" :class="isActiveLink('movies') ? 'text-primary font-bold' : ''">
      Movies
    </router-link>
    <!-- <router-view></router-view> -->
  </header>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const isActiveLink = (routeName) => {
      return route.name === routeName
    }

    return {
      isActiveLink
    }
  }
}
</script>
