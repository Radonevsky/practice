import { createStore } from 'vuex'
import reactions from './reactions'
import auth from './auth'

const store = createStore({
  modules: { reactions, auth }
})

export default store
