<template>
  <div class="app">
    <Navbar/>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>


<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  background-color: #282c34;
}
.main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
}
</style>