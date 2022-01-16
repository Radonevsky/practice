
<template>
  <div class="container">
    <Hello></Hello>
    <Card></Card>
    <Search></Search>
    <CatsControls></CatsControls>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Card from './components/Card'
import Search from './components/Search'
import CatsControls from './components/CatsControls'

export default {
  name: 'App',
  components: {
    Hello,
    Card,
    Search,
    CatsControls
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  font-size: 20px;
}

.container {
  margin: 0 auto;
  max-width: 1080px;
}

ul {
  list-style: none;
}
</style>
