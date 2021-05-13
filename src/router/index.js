import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonsFire from '../views/PokemonsFire.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/fire',
    name: 'PokemonsFire',
    component: PokemonsFire
  },
  {
    path: '/water',
    name: 'PokemonsWater',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonsWater.vue')
  },
  {
    path: '/flying',
    name: 'PokemonsFlying',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonsFlying.vue')
  },
  {
    path: '/dragon',
    name: 'PokemonsDragon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonsDragon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
