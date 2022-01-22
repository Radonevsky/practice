<template>
<div class="films-footer">
  <div class="films-footer__container">
    <h3>Films is here!</h3>
    <button class="films-footer__button" @click="changeUserAuth">
      <span v-if="auth">Logout</span>
      <span v-else>Login</span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilmsFooter',
  data () {
    return {
      auth: false
    }
  },
  created () {
    this.auth = localStorage.getItem('auth') !== null
  },
  methods: {
    changeUserAuth () {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'AllBikesPage' })
        this.auth = false
      } else {
        localStorage.setItem('auth', 'true')
        this.auth = true
      }
    }
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
    &__container {
      width: 500px;
      min-height: 50px;
      margin: 10px auto;
      text-align: center;
    }
  }
</style>
