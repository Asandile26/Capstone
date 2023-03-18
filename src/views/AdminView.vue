<template lang="">
    <div>
        <AdminComp/>
        <SpinnerView/>
    </div>
</template>
<script>
import AdminComp from '@/components/AdminComp.vue';
import SpinnerView from './SpinnerView.vue';
export default {
  name: 'AdminView',
  components: {
    AdminComp,
    SpinnerView
  }
}


</script>
<style lang="">
    
</style>