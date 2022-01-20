
<template>
  <div class="container">
    <ModalPage></ModalPage>
    <Form></Form>
    <ProductsList></ProductsList>
    <CatsControls></CatsControls>
    <Search></Search>
    <Card></Card>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Card from './components/Card'
import Search from './components/Search'
import CatsControls from './components/CatsControls'
import ProductsList from './components/ProductsList'
import Form from './components/Form'
import ModalPage from './components/ModalPage'

export default {
  name: 'App',
  components: {
    Hello,
    Card,
    Search,
    CatsControls,
    ProductsList,
    Form,
    ModalPage
  }
}
</script>

<style>

</style>
