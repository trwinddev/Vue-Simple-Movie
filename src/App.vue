<template>
  <div>
    <header-layout></header-layout>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderLayout from './components/header/HeaderLayout.vue'

export default {
  components: { HeaderLayout },
  setup() {}
}
</script>

<style scoped></style>
