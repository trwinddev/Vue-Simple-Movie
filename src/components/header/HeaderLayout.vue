<template>
  <div class="page-container">
    <header class="header text-white flex justify-between items-center py-10 mb-5">
      <div class="header-left gap-x-5">
        <router-link to="/" :class="isActiveLink('home') ? 'text-primary font-bold' : ''">
          <i class="fa fa-home text-2xl pr-1" aria-hidden="true"></i>
          <span class="text-lg pr-5">Home</span>
        </router-link>
        <router-link to="/movies" :class="isActiveLink('movies') ? 'text-primary font-bold' : ''">
          <i class="fa fa-film text-2xl pr-1" aria-hidden="true"></i>
          <span class="text-lg">Movies</span>
        </router-link>
      </div>
      <!-- <router-view></router-view> -->
      <div class="header-right">
        <router-link to="/login" :class="isActiveLink('login') ? 'text-primary font-bold' : ''">
          <span class="text-lg">Login</span>
        </router-link>
        <router-link
          to="/register"
          :class="
            isActiveLink('register')
              ? 'text-primary bg-primary border-none text-white font-bold'
              : ''
          "
          class="text-lg ml-5 py-2 px-6 border rounded-3xl"
          >Register</router-link
        >
        <i class="fa fa-user-circle-o text-2xl pl-5" aria-hidden="true"></i>
      </div>
    </header>
  </div>
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
