<template>
  <div class="form">
    <div class="form__item">
      <label>
        <p>E-mail:</p>
          <input class="form__input-text" type="text" placeholder="Enter your email"
                 v-model.trim="email">
      </label>
    </div>
    <div class="form__item">
      <label>
        <p>Login:</p>
        <input class="form__input-text" type="text" placeholder="Enter your login"
               v-model.trim="login">
      </label>
    </div>
    <div class="form__item">
      <label>
        <p>Password:</p>
          <input class="form__input-text" type="text" placeholder="Enter your password"
                 v-model.trim="password">
      </label>
    </div>
    <div class="form__item">
      <label>
        <p>Your region:</p>
        <select class="form__select"
                v-model="country">
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
        <select class="form__select"
                v-model="theme" multiple>
          <option v-for="(item, idx) in themes"
                  :key="idx"
                  :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </label>
    </div>
    <div class="form__item">
      <input class="form__input-checkbox" value="policy 1" id="policy" type="checkbox"
             v-model="agreePolicy">
      <label for="policy">Agree with policy</label><br>
      <input class="form__input-checkbox" value="policy 2" id="policy2" type="checkbox"
             v-model="agreePolicy">
      <label for="policy2">Agree with policy2</label>
    </div>
    <div class="form__item">
      <input class="form__input-radio" value="male" id="male" type="radio"
             v-model="sex">
      <label for="male">Male</label>
      <input class="form__input-radio" value="female" id="female" type="radio"
             v-model="sex">
      <label for="female">Female</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      email: '',
      login: '',
      password: '',
      country: 'Russia',
      theme: [],
      agreePolicy: [],
      sex: '',
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
}
</style>
