<template>
  <div class="search">
    <p>Find name here!</p>
    <label>
      <input class="search__input"
             type="text"
             :value="value" @input="typing($event.target.value)"
      >
      {{ value }}
    </label>
    <p>{{ `How many names: ${names.length}, matches: ${value ? matches.length : 0}` }}</p>
    <ul class="search__list">
      <li v-for="person in matches"
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
      matches: [],
      value: ''
    }
  },
  methods: {
    typing (value) {
      this.value = value
      this.matches = this.names.filter(item => item.toLowerCase().includes(value.toLowerCase()))
    }
  }
}
</script>

<style>
.search {
  border-top: 3px solid aquamarine;
}
.search__list {
  min-height: 200px;
}

</style>
