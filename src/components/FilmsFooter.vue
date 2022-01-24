<template>
  <div class="films-footer__layout">
    <films-modal v-if="isModalEnabled"
                 @close="isModalEnabled = false"></films-modal>
    <div class="films-footer">
      <div class="films-footer__container">
        <h3>Films is here!</h3>
        <button class="films-footer__button" @click="isModalEnabled = true">
          {{ auth ? 'Logout' : 'Login' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import FilmsModal from './FilmsModal'

export default {
  name: 'FilmsFooter',
  components: { FilmsModal },
  data () {
    return {
      auth: false,
      isModalEnabled: false
    }
  },
  async created () {
    const res = await fetch('https://api.realworld.io/api/user')
    if (res.status === 201) {
      this.auth = true
    }
  },
  methods: {
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
