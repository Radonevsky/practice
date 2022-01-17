<template>
  <input type="text" class="products__search"
         v-model="value">
<!--  <input type="text" class="products__search"
         @input="$emit('update:modelValue', $event.target.value)">-->
  <button class="button" @click="$emit('search', value)">Find</button>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      value: ''
    }
  },
  emits: ['search']
}
</script>

<style scoped>

</style>
