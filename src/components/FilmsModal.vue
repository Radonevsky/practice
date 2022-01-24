<template>
  <div class="films-modal__overlay">
    <div class="films-modal">
      <h3 class="films-modal__title">{{ isAuthReg ? 'Registration' : 'Log In' }}</h3>
      <button class="films-modal__button close"
              @click="closeModal">X
      </button>
      <div class="films-modal__form">
        <form @submit.prevent="formSubmit">
          <label>
            Username:
            <input type="text"
                   v-model="form.username">
          </label>
          <label>
            E-mail:
            <input type="email"
                   v-model="form.email">
          </label>
          <label>
            Password:
            <input type="password"
                   v-model="form.password">
          </label>
          <div class="films-modal__form-footer">
            <div class="films-modal__mode">
              <p>{{ isAuthReg ? 'Already have an account?' : 'Don\'t have an account?' }}</p>
              <button class="films-modal__toggle"
                @click="isAuthReg = !isAuthReg">
                {{ isAuthReg ? 'Log In' : 'Registration' }}
              </button>
            </div>
            <button class="films-modal__button"
                    @click="closeModal">Close</button>
            <button class="films-modal__button"
                    @click="authRequest"
                    >OK</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FilmsModal',
  data () {
    return {
      isAuthReg: false,
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    async authRequest () {
      if (this.isAuthReg) {
        const res = await fetch('https://api.realworld.io/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        })
        console.log(res.status)
        console.log(res)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.films-modal__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
}
.films-modal {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 350px;
  position: absolute;
  top: 50px;
  background-color: cadetblue;
  border: 1px solid #777777;
  box-shadow: 10px 10px 15px #000;
  &__title {
    border-bottom: 2px solid #777777;
    display: inline-block;
  }
  &__form {
    input {
      display: inline-block;
      width: 100%;
    }
    p {
      margin: 0;
    }
    label {
      display: block;
    }
    &-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      font-size: 12px;
    }
  }
  &__toggle {
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    color: #EB5804;
  }
  &__button {
    width: 60px;
    height: 20px;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>
