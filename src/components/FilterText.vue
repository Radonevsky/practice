<template>
<div class="filter">
  <h2>Filter the text!</h2>
  <textarea class="filter__area"
            v-model="filteredText"></textarea>
  <div v-html="upperCase"></div>
</div>
</template>

<script>
export default {
  name: 'FilterText',
  data () {
    return {
      filteredText: ''
    }
  },
  computed: {
    upperCase () {
      let filtered = ''
      filtered = this.filteredText.toUpperCase()
      filtered = filtered.replace(':)', '&#128512;')
      return filtered
    }
  }
}
</script>

<style scoped>
.filter {
  border-bottom: #24ab23 3px solid;
}
</style>
