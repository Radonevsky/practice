<template>
  <div class="films-footer__layout">
    <films-modal v-if="isModalEnabled"
                 @close="isModalEnabled = false"></films-modal>
    <div class="films-footer">
      <div class="films-footer__container">
        <h3>Films is here!</h3>
        <button class="films-footer__button" @click="isModalEnabled = true">
          {{ getUser ? 'Logout' : 'Login' }}
        </button>
        <span>{{ user }}</span>
      </div>
    </div>
  </div>
</template>

<script>

import FilmsModal from './FilmsModal'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FilmsFooter',
  components: { FilmsModal },
  data () {
    return {
      isModalEnabled: false,
      user: ''
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'auth/getUser'
    })
  },
  created () {
    this.setUser(JSON.parse(localStorage.getItem('user')))
  },
  methods: {
    ...mapActions({
      setUser: 'auth/setUser'
    })
  }
}
</script>

<style lang="scss">
  .films-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #EB5804;
    z-index: 1;
    &__container {
      width: 500px;
      min-height: 50px;
      margin: 10px auto;
      text-align: center;
    }
  }
</style>
