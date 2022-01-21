import scrollHandler from '../mixins/scrollHandler'

export default {
  install: (app) => {
    app.config.globalProperties.$log = () => {
      console.log('plugin is working!')
    }
    app.mixin(scrollHandler)
  }
}
