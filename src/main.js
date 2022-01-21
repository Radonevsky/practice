import { createApp } from 'vue'
import App from './App.vue'
import simplePlugin from './plugins/simplePlugin'
import router from './router'
import './style/main.scss'

const app = createApp(App)

app.use(simplePlugin)
app.use(router)
app.mount('#app')
