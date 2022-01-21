<template>
  <div class="films-page container">
    <h2>Выбери фильм на свой вкус</h2>
    <bikes-list :films="bikes" />
  </div>
</template>

<script>

import bikes from '../mocks/bikes'
import BikesList from '../components/BikesList'

export default {
  components: { BikesList },
  data () {
    return {
      bikes
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color:#ffffff;
  margin-bottom: 30px;
}
</style>
