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
    showSpinner: false
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
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
    },
  },
  actions: {
    async login (context, payload) {
      const res = await axios.post(`${Don}/login`,payload);
      const { result, err } = await res.data;
      if (result, err) {
        context.commit("setLoggedUser", result);
      } else {
        context.commit("setMessage", err);
      }
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
      const res = await axios.put(`${Don}/user/${id}`, {name: name})
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${Don}/user/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async AddUser(context, user) {
      try {
        const res = await axios.post('/users', user)
        context.commit('setUser', res.data)
      } catch (error) {
        context.commit('setMessage', error.message)
      }
    },
    async fetchProducts(context,) {
      const res = await axios.get(`${Don}/products`)
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
