<template>
  <div class="form" >
    <form @submit.prevent="checkForm">
      <div class="form__item">
        <label>
          <p>E-mail:</p>
          <input class="form__input-text" type="text" placeholder="Enter your email"
                 v-model.trim="form.email"
                 :class="v$.form.email.$error ? 'invalid' : ''">
          <p class="invalid__text"
             v-if="v$.form.email.email.$invalid && v$.form.email.$error">E-mail is invalid</p>
          <p class="invalid__text"
             v-if="v$.form.email.required.$invalid && v$.form.email.$error">Required</p>
        </label>
      </div>
      <div class="form__item">
        <label>
          <p>Login:</p>
          <input class="form__input-text" type="text" placeholder="Enter your login"
                 v-model.trim="form.login"
                 :class="v$.form.login.$error ? 'invalid' : ''">
          <p class="invalid__text"
             v-if="v$.form.login.minLength.$invalid && v$.form.login.$error">Min 4 characters</p>
          <p class="invalid__text"
             v-if="v$.form.login.required.$invalid && v$.form.login.$error">Required</p>
        </label>
      </div>
      <div class="form__item">
        <label>
          <p>Password:</p>
          <input class="form__input-text" type="text" placeholder="Enter your password"
                 v-model.trim="form.password"
                 :class="v$.form.password.$error ? 'invalid' : ''">
          <p class="invalid__text"
             v-if="v$.form.password.minLength.$invalid && v$.form.password.$error">Min 6 characters</p>
          <p class="invalid__text"
             v-if="v$.form.password.required.$invalid && v$.form.password.$error">Required</p>
        </label>
      </div>
      <div class="form__item">
        <label>
          <p>Your region:</p>
          <select class="form__select"
                  v-model="form.country">
            <option v-for="(item, idx) in countries"
                    :key="idx"
                    :value="item.value">
              {{ item.name }}
            </option>
          </select>
        </label>
      </div>
      <div class="form__item">
        <label>
          <p>Favorite themes:</p>
          <select class="form__select" multiple
                  v-model="form.theme"
                  :class="v$.form.theme.$error ? 'invalid' : ''" >
            <option v-for="(item, idx) in themes"
                    :key="idx"
                    :value="item.value">
              {{ item.name }}
            </option>
          </select>
          <p class="invalid__text"
             v-if="v$.form.theme.maxLength.$invalid && v$.form.theme.$error">Max 3 themes</p>
          <p class="invalid__text"
             v-if="v$.form.theme.required.$invalid && v$.form.theme.$error">Required</p>
        </label>
      </div>
      <div class="form__item">
        <input class="form__input-checkbox" value="policy 1" id="policy" type="checkbox"
               :class="v$.form.agreePolicy.$invalid ? 'invalid' : ''"
               v-model="form.agreePolicy">
        <label for="policy">Agree with policy</label><br>
        <p class="invalid__text"
           v-if="v$.form.agreePolicy.sameAs.$invalid && v$.form.$error">Read the policy!</p>
      </div>
      <div class="form__item">
        <input class="form__input-radio" value="male" id="male" type="radio"
               v-model="form.sex">
        <label for="male">Male</label>
        <input class="form__input-radio" value="female" id="female" type="radio"
               v-model="form.sex">
        <label for="female">Female</label>
      </div>
      <button class="form__button" type="submit">Save!</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'

export default {
  name: 'Form',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        email: '',
        login: '',
        password: '',
        country: 'Russia',
        theme: [],
        sex: '',
        agreePolicy: false
      },
      countries: [
        {
          name: 'Russia',
          value: 'russia'
        },
        {
          name: 'Spain',
          value: 'spain'
        },
        {
          name: 'USA',
          value: 'usa'
        },
        {
          name: 'France',
          value: 'france'
        }
      ],
      themes: [
        {
          name: 'Cats',
          value: 'cats'
        },
        {
          name: 'Cars',
          value: 'cars'
        },
        {
          name: 'Lego',
          value: 'lego'
        },
        {
          name: 'Anime',
          value: 'anime'
        }
      ]
    }
  },
  validations () {
    return {
      form: {
        login: { required, minLength: minLength(4) },
        password: { required, minLength: minLength(6) },
        email: { required, email },
        theme: { required, maxLength: maxLength(3) },
        agreePolicy: {
          sameAs: sameAs(true)
        }
      }
    }
  },
  methods: {
    async checkForm () {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        console.log(this.v$.form.email.email.$message)
      } else {
        console.log('yeah')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  border-bottom: aquamarine 3px solid;
  &__item {
    margin-top: 30px;
  }
  p {
    margin: 0;
  }
  &__input-checkbox {
    width: 20px;
  }
  &__input-text, &__select {
    width: 200px;
  }
  .invalid {
    border: 1px solid red;
  }
  .invalid__text {
    font-size: 14px;
    color: red;
  }
}
</style>
