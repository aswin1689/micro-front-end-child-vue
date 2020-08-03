import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/details',
    name: 'ProductDetails',
    component: ProductDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
