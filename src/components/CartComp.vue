<template lang="">
    <div>
        <h2>Cart</h2>
        <ul>
            <li v-for="item in Cart" :key="item.id">
                {{item.prodName}} - ${{item.price}}
                <button @click="deleteItem(item)">Delete</button>
            </li>
        </ul>
        <div>Total: ${{total}}</div>
        <button @click="Checkout">Checkout</button>
    </div>
</template>
<script>
export default {
   name: 'CartComp' 
}
</script>
<style lang="">
    
</style>