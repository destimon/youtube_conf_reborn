<template>
  <div class="container">
    <Welcome/>
    <nuxt-link to="/home">Home page</nuxt-link>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'

export default {
  components: {
    Welcome
  }
}
</script>

<style>

</style>
