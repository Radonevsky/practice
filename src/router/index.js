import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home'
import AllBikesPage from '../pages/AllBikesPage'
import Practice from '../pages/Practice'
import BikePage from '../pages/BikePage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bikes',
    name: 'AllBikesPage',
    component: AllBikesPage
  },
  {
    path: '/bikes/:id',
    name: 'BikePage',
    component: BikePage
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

export default index
