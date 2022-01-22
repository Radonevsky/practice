<template>
  <router-view />
  <FilmsFooter></FilmsFooter>
</template>

<script>

import FilmsFooter from '../components/FilmsFooter'
import { mapActions } from 'vuex'

export default {
  name: 'FilmLayout',
  components: {
    FilmsFooter
  },
  methods: {
    ...mapActions({
      load: 'reactions/loadReactions'
    })
  },
  created () {
    this.load(1000)
    // this.$store.dispatch('loadReactions', 1000)
  }
}
</script>

<style scoped>

</style>
