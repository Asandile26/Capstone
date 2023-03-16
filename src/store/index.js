import { createStore } from 'vuex'
import axios from 'axios'

const Don = 'https://run-it.onrender.com'
export default createStore({
  state: {
    Users: null,
    User: null,
    Products: null,
    Product: null,
    message: null,
    showSpinner: null
  },
  getters() {
  },
  mutations: {
    setUsers(state, values) {
      state.Users = values
    },
    setUser(state, value) {
      state.User = value
    },
    setProducts(state, products) {
      state.Products = products
    },
    setProduct(state, value) {
      state.Product = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setSpinner(state, value){
      state.showSpinner = value
    }
  },
  actions: {
    async login() {
      const res = await axios.post(`${Don}/login`, {
        emailAdd: this.emailAdd,
        userPass: this.userPass
      })
      console.log(res);
     
    },
    async register(context, payload) {
      const res = await axios.post(`${Don}/register`, payload)
      let {msg, err} = await res.data
      if(msg){
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchUsers(context) {

      const res = await axios.get(`${Don}/users`)
      let {results, err} = await res.data
      if(results){
        context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)     
      }
    },
    async fetchUser(context, Users) {
      const res = await axios.get(`${Don}/user/:id`, Users)
      let {results, err} = await res.data
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, id, name) {
      const res = await axios.put(`${Don}/User/${id}`, {name: name})
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${Don}/User/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context,) {
      const res = await axios.get(`${Don}/Products`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProduct(context, payload) {
      const res = await axios.get(`${Don}/product`, payload)
      let {results, err} = await res.data
      if(results){
        context.commit('setProduct', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateProduct(context, id) {
      const res = await axios.put(`${Don}/Product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${Don}/Product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },

    async fetchCart(context) {
      const res = await axios.get(`${Don}/cart`)
      let {results, err} = await res.data
      if(results){
        context.commit('setCart', results)
      }else{
        context.commit('setMessage', err)
      }
    
    },
    
    async fetchCartById(context, payload) {
      const res = await axios.get(`${Don}/user/:id/cart`, payload)
      let {results, err} = await res.data
      if(results){
        context.commit('setCart', results)
      }else{
        context.commit('setMessage', err)
      } 
    }
  },
})
