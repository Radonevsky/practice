import { createApp } from 'vue'
import App from './App.vue'
import simplePlugin from './plugins/simplePlugin'
import router from './router'
import store from './store/index'
import './style/main.scss'

const app = createApp(App)

app.use(simplePlugin)
app.use(router)
app.use(store)
app.mount('#app')
