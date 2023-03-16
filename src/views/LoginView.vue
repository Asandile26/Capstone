<template lang="">
    <div>
        <LoginComp/>
        <SpinnerView/>
    </div>
</template>
<script>
import LoginComp from '@/components/LoginComp.vue';
import SpinnerView from './SpinnerView.vue';
export default {
    name: 'LoginView', 
    components: {
        LoginComp,
    SpinnerView}
}
</script>
<style lang="">
    
</style>