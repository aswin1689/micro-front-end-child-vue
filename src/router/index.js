import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'

if (!window.VueRouter) Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products,
    props: true
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
