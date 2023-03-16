<template lang="">
    <div>
        <div class="card" v-for="pro in products" :key="pro" style="width: 18rem;">
  <img :src="pro.imgURL"  alt="Jogging stuff">
  <div class="card-body">
    <p>ID: {{pro.proID}}</p>
    <h5>Name: {{pro.prodName}}</h5>
    <p>Price: {{pro.price}}</p>
    <p>size: {{pro.size}}</p>
    <p>Category: {{pro.category}}</p>
    <p>Description: {{pro.description}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'ProductComp',
    setup(){
      const store = useStore()
      store.dispatch("fetchProducts")
      const product = computed(() => store.state.product)
      return{
        product
      }
    }
}
</script>
<style lang="">
    
</style>