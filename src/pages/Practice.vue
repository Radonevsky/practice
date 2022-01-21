<template>
  <div class="practicePage">
    <h2>Practice page</h2>
    <FilterText></FilterText>
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
import Hello from '../components/Hello'
import Card from '../components/Card'
import Search from '../components/Search'
import CatsControls from '../components/CatsControls'
import ProductsList from '../components/ProductsList'
import Form from '../components/Form'
import ModalPage from '../components/ModalPage'
import FilterText from '../components/FilterText'

export default {
  name: 'PracticePage',
  components: {
    Hello,
    Card,
    Search,
    CatsControls,
    ProductsList,
    Form,
    ModalPage,
    FilterText
  }
}
</script>

<style>

</style>
