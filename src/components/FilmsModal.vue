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
              <a href="#" class="films-modal__toggle"
                @click.prevent="isAuthReg = !isAuthReg">
                {{ isAuthReg ? 'Log In' : 'Registration' }}
              </a>
            </div>
            <button class="films-modal__button"
                    @click="closeModal">Close</button>
            <button class="films-modal__button" type="submit">OK</button>
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
    changeUserState () {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'main' })
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    },
    async signUp () {
      const res = await fetch('https://api.realworld.io/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: this.form.username,
            email: this.form.email,
            password: this.form.password
          }
        })
      })
      const data = await res.json()
      if (res.status === 200 || res.status === 201) {
        this.$store.dispatch('auth/setUser', data)
        localStorage.setItem('user', JSON.stringify(data))
        this.$emit('close')
      } else {
        this.errors = data
        console.log(data)
      }
    },
    /* async logIn () {
      const res = await fetch('https://api.realworld.io/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email: this.form.email,
            password: this.form.password
          }
        })
      })
      const data = await res.json()
      if (res.status === 200 || res.status === 201) {
        this.$store.dispatch('auth/setUser', data)
        this.$emit('close')
      } else {
        this.errors = data
        console.log(data)
      }
    }, */
    formSubmit () {
      if (this.isAuthReg) {
        this.signUp()
      } else {
        this.logIn()
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
