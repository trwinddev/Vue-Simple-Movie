<template>
  <div>
    <header class="header text-white flex justify-center items-center gap-x-5 py-10 mb-10">
      <router-link :to="{ name: 'home' }" class="text-primary">Home</router-link>
      <router-link :to="{ name: 'movies' }">Movies</router-link>
      <router-view></router-view>
    </header>
    <section class="banner h-[400px] page-container">
      <div class="w-full h-full relative rounded-lg">
        <div
          class="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"
        ></div>
        <img
          src="https://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
          class="rounded-lg w-full h-full object-cover"
          alt=""
        />
        <div class="absolute left-5 bottom-5 w-full text-white">
          <h2 class="font-bold text-3xl mb-5">Avengers: Endgame</h2>
          <div class="flex items-center gap-x-3 mb-8">
            <span class="py-2 px-4 border border-white rounded-md">Adventure</span>
            <span class="py-2 px-4 border border-white rounded-md">Adventure</span>
            <span class="py-2 px-4 border border-white rounded-md">Adventure</span>
          </div>
          <button class="py-3 px-6 rounded-lg bg-primary text-white font-medium">Watch now</button>
        </div>
      </div>
    </section>
  </div>
</template>
