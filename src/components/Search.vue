<template>
  <div class="search">
    <p>Find name here!</p>
    <label>
      <input class="search__input"
             type="text"
             :value="searchText"
             @input="searchText = $event.target.value"
      >
    </label>
    <p>How many names: {{names.length}}, matches: {{getFilteredNames.length}}</p>
    <ul class="search__list">
      <li v-for="person in getFilteredNames"
          :key="person">
        <span>{{ person }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      names: [
        'Jhon',
        'Peter',
        'Bred',
        'Mariya',
        'Elena'
      ],
      searchText: ''
    }
  },
  computed: {
    getFilteredNames () {
      return this.names.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
</script>

<style>
.search {
  border-top: 3px solid aquamarine;
}
.search__list {
  min-height: 150px;
}

</style>
