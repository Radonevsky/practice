export default {
  methods: {
    scrollEnd () {
      console.warn('You must rewrite scrollEnd method')
    },
    onScroll (event) {
      const container = event.target
      if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
        this.scrollEnd()
      }
    }
  }
}
