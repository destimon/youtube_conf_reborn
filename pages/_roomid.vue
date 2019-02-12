<template>
  <div class="container">
    <h1>Room [room.roomid]</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: '',
      room: ''
    }
  },
  methods: {

    decodeYoutubeId (url) {
      var query = url;
      var vars = query.split('&');

      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');

        if (decodeURIComponent(pair[0]) == 'v') {
          return decodeURIComponent(pair[1]);
        }
      }
    },
    roomInfo (url) {
      axios.get('/api/rooms/' + this.$route.path.replace(/\//g, ""))
      .then((res) => {
        this.room = res.data;
      })
    }
  },
  beforeMount() {
    this.$store.dispatch('updUser').then((user) => { this.user = user; })
    this.roomInfo();
  }
}
</script>

<style>

</style>
