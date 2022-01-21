
<template>
  <div class="container">
    <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/practice">Practice</router-link> |
      <router-link to="/bikes">Bikes</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
