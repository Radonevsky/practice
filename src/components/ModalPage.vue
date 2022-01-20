<template>
  <div class="modal-page">
    <h2 class="modal-page__title">This section has a modal window</h2>
    <button class="modal-page__button" @click="openModal">Open the modal</button>
    <Modal v-if="isModalOpen"
           title="This title is in props"
           @close="isModalOpen = false">
      <template v-slot:body>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi aperiam at beatae
          deleniti doloremque dolorum error esse et eveniet facere fuga incidunt ipsam, laborum maxime minima minus
          necessitatibus neque nesciunt numquam odit, provident quaerat quibusdam quod recusandae rem repellendus
          repudiandae, saepe tenetur ut voluptas voluptatem voluptatibus? Possimus, qui!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi aperiam at beatae
          deleniti doloremque dolorum error esse et eveniet facere fuga incidunt ipsam, laborum maxime minima minus
          necessitatibus neque nesciunt numquam odit, provident quaerat quibusdam quod recusandae rem repellendus
          repudiandae, saepe tenetur ut voluptas voluptatem voluptatibus? Possimus, qui!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi aperiam at beatae
          deleniti doloremque dolorum error esse et eveniet facere fuga incidunt ipsam, laborum maxime minima minus
          necessitatibus neque nesciunt numquam odit, provident quaerat quibusdam quod recusandae rem repellendus
          repudiandae, saepe tenetur ut voluptas voluptatem voluptatibus? Possimus, qui!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi aperiam at beatae
          deleniti doloremque dolorum error esse et eveniet facere fuga incidunt ipsam, laborum maxime minima minus
          necessitatibus neque nesciunt numquam odit, provident quaerat quibusdam quod recusandae rem repellendus
          repudiandae, saepe tenetur ut voluptas voluptatem voluptatibus? Possimus, qui!</p>
      </template>
      <template v-slot:footer>
      </template>
    </Modal>
  </div>

</template>

<script>
import Modal from './Modal'

export default {
  name: 'ModalPage',
  components: {
    Modal
  },
  data () {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal () {
      this.isModalOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-page {
  min-height: 300px;
  border-bottom: 5px dashed #24ab23;
  position: relative;
}

.modal-page__button {
  padding: 5px;
  color: #fff;
  background-color: cornflowerblue;
}

</style>
