<template>
  <div class="film-list">
    <bike-card
      class="film-card"
      v-for="film in films"
      :key="film.id"
      :film="film"
    />
  </div>
</template>

<script>
import BikeCard from './BikeCard'

export default {
  props: {
    films: {
      type: Array,
      default: () => []
    }
  },
  components: { BikeCard }
}
</script>

<style lang="scss" scoped>
.film-card {
  margin-bottom: 40px;
}
</style>
