import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home'
import AllBikesPage from '../pages/AllBikesPage'
import Practice from '../pages/Practice'
import BikePage from '../pages/BikePage'
import NotFound from '../pages/404'
import FilmsLayout from '../pages/FilmsLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'filmsLayout',
    component: FilmsLayout,
    children: [
      {
        path: '',
        name: 'AllBikesPage',
        component: AllBikesPage
      },
      {
        path: ':id',
        name: 'BikePage',
        component: BikePage,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('auth')) {
            next()
          } else {
            next({ name: AllBikesPage })
          }
        }
      },
      {
        path: '/:pathMatch(.*/*)',
        redirect: { name: 'AllBikesPage' }
      }
    ]
  },

  {
    path: '/practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const index = createRouter({
  history: createWebHistory(),
  routes
})

export default index
