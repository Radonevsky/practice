<template>
  <input type="text" class="products__search"
         @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: 'MyInput',
  model: {
    props: ['value'],
    event: 'input'
  }
}
</script>

<style scoped>

</style>
