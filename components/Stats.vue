<template>
  <div class="container">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Current amount of rooms: {{ currRoomsAmount }}</li>
      <li class="list-group-item">Current amount of users in search: {{currSearchAmount }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currRoomsAmount: 0,
      currSearchAmount: 0
    }
  }
}
</script>
