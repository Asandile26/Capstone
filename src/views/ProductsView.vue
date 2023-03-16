<template lang="">
    <div>
        <ProductsComp/>
        <SpinnerComp/>
    </div>
</template>
<script>
import ProductsComp from '@/components/ProductsComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    name: 'ProductsView',
    components: {
        ProductsComp,
        SpinnerComp
    }
}
</script>
<style lang="">
    
</style>