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
export default {
    name: 'ProductComp'
}
</script>
<style lang="">
    
</style>