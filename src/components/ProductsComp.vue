<template lang="">
    <div>
        <div class="card" v-for="pro in products" :key="pro" style="width: 18rem;">
  <img :src="pro.imgURL"  alt="Jogging stuff">
  <div class="card-body">
    <h5>Name: {{pro.prodName}}</h5>
    <p>Price: {{pro.price}}</p>
    <p>size: {{pro.size}}</p>
    <a href="#" class="btn btn-primary">view more</a>
  </div>
</div>
    </div>
</template>
<script>
export default {
    name: 'ProductsComp'
}
</script>
<style lang="">
    
</style>