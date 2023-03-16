<template lang="">
  <div >
    <div>
        <div class="card" v-for="pro in products" :key="pro.id" style="width: 18rem;">
  <img :src="pro.imgURL"  alt="Jogging stuff">
  <div class="card-body">
    <h5>Name: {{pro.prodName}}</h5>
    <p>Price: {{pro.price}}</p>
    <p>size: {{pro.size}}</p>
    <a href="#" class="btn btn-primary">view more</a>
  </div>
</div>
    </div>
  </div>
</template>
<script>
import { computed} from 'vue'
import useStore from 'vue'
export default {
    setup(){
      const store = useStore()
      store.dispatch("fetchProducts")
      const products = computed(() => store.state.products)
      return{
        products
      }
    },
    mounted(){
      this.$store.dispatch("fetchProducts")
    }
}
</script>
<style lang="">
    
</style>