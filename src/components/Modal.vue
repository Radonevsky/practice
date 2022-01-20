<template>
  <div class="modal">
    <button class="close"
            @click="closeModal">Close</button>
    <h3 class="modal__title">{{ title }}</h3>
    <div class="modal__body"
         ref="modalBody" @scroll="scrollBody">
      <slot name="body"></slot>
    </div>
    <slot name="footer">
      <button class="modal__button skip"
              @click="closeModal">Skip
      </button>
      <button class="modal__button" :disabled="!isRulesReaded">OK!</button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Modal title'
    }
  },
  mounted () {
    const modalBody = this.$refs.modalBody
    modalBody.scrollTop = modalBody.scrollHeight - modalBody.clientHeight
  },
  data () {
    return {
      isRulesReaded: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    },
    scrollBody () {
      const modalBody = this.$refs.modalBody
      if (modalBody.scrollTop >= modalBody.scrollHeight - modalBody.clientHeight) {
        this.isRulesReaded = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.modal {
  padding: 10px 20px;
  width: 500px;
  min-height: 200px;
  margin: 0 auto;
  position: absolute;
  left: calc(100vw / 4);
  top: 10px;
  background-color: cadetblue;
  border: 1px solid #777777;
  box-shadow: 10px 10px 15px #000;
  &__body {
    max-height: 200px;
    overflow-y: scroll;
    font-size: 14px;
  }
  &__title {
    border-bottom: 2px solid #777777;
  }
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>
