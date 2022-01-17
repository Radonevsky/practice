<template>
  <div class="products">
    <h2 class="title">Desk chairs</h2>
    <label>
      Search
      <my-input v-model="searchText" />
<!--      <input type="text" class="products__search"
              :value="searchText" @input="searchText = $event.target.value">-->
    </label>
    <ul class="products__list">
      <li class="products__item"
          v-for="(item, idx) in products" :key="idx">
        <ProductCard
          :title="item.title"
          :price="item.price"
          :count="item.count"
          :imgUrl="item.imgUrl"
          @addToCart="addToCart(idx)"
        ></ProductCard>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import MyInput from './MyInput'
export default {
  name: 'ProductsList',
  components: { ProductCard, MyInput },
  data () {
    return {
      products: [
        {
          title: 'MARKUS',
          price: 200,
          count: 4,
          imgUrl: 'https://www.ikea.com/ru/ru/images/products/markus-rabochiy-stul-visle-temno-seryy__0724714_pe734597_s5.jpg?f=xs'
        },
        {
          title: 'FLINTAN',
          price: 100,
          count: 10,
          imgUrl: 'https://www.ikea.com/ru/ru/images/products/flintan-rabochiy-stul-s-podlokotnikami-chernyy__1007241_pe825960_s5.jpg?f=xs'
        },
        {
          title: 'LIDKULLEN',
          price: 110,
          count: 6,
          imgUrl: 'https://www.ikea.com/ru/ru/images/products/lidkullen-taburet-opora-dlya-raboty-sidya-stoya-gunnared-temno-seryy__0771308_pe755688_s5.jpg?f=xs'
        },
        {
          title: 'RENBERGET',
          price: 90,
          count: 18,
          imgUrl: 'https://www.ikea.com/ru/ru/images/products/renberget-rabochiy-stul-bumstad-chernyy__1020135_pe831794_s5.jpg?f=xs'
        }
      ],
      searchText: ''
    }
  },
  methods: {
    addToCart (idx) {
      console.log(idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  h2 {
    margin: 0;
  }
  .products__list {
    display: flex;
    gap: 50px;
  }
}
</style>
