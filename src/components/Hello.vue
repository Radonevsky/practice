<template>
<div class="hello">
  <p class="text">{{ text }}</p>
  <hr>
  <label class="label">
    Введите e-mail:
    <input type="text"
           :value="email"
           @input="emailInput($event.target.value)">
  </label>
  <p>Email data: {{email}}</p>
  <label class="label">
    Введите e-mail:
    <input type="password"
           :value="password"
           @input="passInput($event.target.value)">
  </label>
  <p>Pass data: {{password}}</p>

  <hr>
  <label class="label">
    <span class="apples">Please entry apple count:</span>
    <button class="plus" @click="appleInc">+</button>
    <input class="input__apples"
           type="number"
           :value="count"
           @input="appleInput($event.target.value)" min=1 max=10>
  </label>
  <button class="minus" @click="appleDec">-</button>
  <p>count data: {{count}}</p>
</div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      text: 'Hello people',
      email: 'radon@mail.ru',
      password: '123qwerty',
      count: 1
    }
  },
  methods: {
    emailInput (value) {
      this.email = value
    },
    passInput (value) {
      this.password = value
    },
    appleInput (value) {
      this.count = value
    },
    appleInc () {
      if (this.count > 0 && this.count <= 9) {
        this.count += 1
      }
    },
    appleDec () {
      if (this.count > 1 && this.count <= 10) {
        this.count -= 1
      }
    }
  }
}
</script>

<style>
.apples {
  display: block;
}

.input__apples {
  width: 40px;
}
</style>
