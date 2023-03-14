<template lang="">
    <div>
    <form action="https://formspree.io/f/mwkjqqzd" method="POST"  @submit.prevent="onContact">
    <div class="inputF">
    <label for="FullName">Full Name</label>
    <input name="FullName" id="FullName" type="name" v-model="FullName">
    </div><br><br>
  <div class="inputC">
    <label for="email">Email</label>
    <input name="Email" id="email" type="email" v-model="Email">
  </div><br><br>
  <div>
    <textarea name="msg" id="msg" cols="30" rows="10" v-model="Message">Message</textarea>
  </div><br><br>
  <button type="submit">Submit</button>
</form>
    </div>
</template>
<script>
export default {
    name: 'ContactComp',
    methods: {
      onContact(){
        
      }
    }
}
</script>
<style lang="">
    
</style>