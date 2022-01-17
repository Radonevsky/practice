<template>
  <div class="product-card">
    <img class="product__photo" alt="Mac Book"
         :src="imgUrl">
    <div class="product__info">
      <h2 class="product__title">{{ title }}</h2>
      <p class="product__price">${{ price }}</p>
      <p class="product__count">Available: {{ count }}</p>
      <button class="product__button" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      default: 'No name',
      validate (value) {
        return value.length < 50
      }
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    imgUrl: String
  },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>

<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 5px;

  text-align: center;
  border: 3px solid pink;
  box-shadow: 5px 5px 5px #777777;
  h2 {
    font-size: 22px;
    margin: 0;
  }
  p {
    margin: 5px 0 0 0;
  }
  .product__photo {
    width: 100%;
    height: auto;
  }
}
</style>
