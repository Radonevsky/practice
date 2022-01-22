
<template>
  <div class="container">
    <main-header></main-header>
    <router-view />
  </div>
</template>

<script>

import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: { MainHeader }
}
</script>

<style>

</style>
