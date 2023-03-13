import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import ProductsViewVue from '@/views/ProductsView.vue'
import CartViewVue from '@/views/CartView.vue'
import ContactCompVue from '@/components/ContactComp.vue'
import RegistrationViewVue from '@/views/RegistrationView.vue'
import ForgotPassVue from '@/components/ForgotPass.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsViewVue
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartViewVue
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactCompVue
  },
  {
    path: '/register',
    name: 'registration',
    component: RegistrationViewVue
  },
  {
    path: '/forgot',
    name: 'forgotPass',
    component: ForgotPassVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
