
<template>
  <Hello></Hello>
  <Card></Card>
  <Search></Search>
</template>

<script>
import Hello from './components/Hello'
import Card from './components/Card'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Hello,
    Card,
    Search
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  font-size: 20px;
}

ul {
  list-style: none;
}
</style>
