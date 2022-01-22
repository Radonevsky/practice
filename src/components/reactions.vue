<template>
  <div class="reactions">
    <h2>Оцените фильм</h2>
    <ul>
      <li v-for="item in reactions" :key="item.id">
        <button>{{ item.title }}</button>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'reactions',
  computed: {
    ...mapGetters({
      getReactions: 'reactions/getReactions'
    }),
    reactions () {
      return this.getReactions
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
  }
  li {
    margin-right: 10px;
  }
</style>
