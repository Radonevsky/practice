<template>
  <router-view />
  <FilmsFooter></FilmsFooter>
</template>

<script>

import FilmsFooter from '../components/FilmsFooter'

export default {
  name: 'FilmLayout',
  components: {
    FilmsFooter
  }
}
</script>

<style scoped>

</style>
