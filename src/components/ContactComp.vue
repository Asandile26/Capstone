<template lang="">
    <div>
    <form action="https://formspree.io/f/mwkjqqzd" method="POST"  @submit.prevent="onSubmit">
    <div class="inputF">
    <label for="FullName">Full Name</label>
    <input name="FullName" id="FullName" type="name" v-model="FullName">
    </div>
  <div class="inputC">
    <label for="email">Email</label>
    <input name="Email" id="email" type="email" v-model="Email">
  </div>
  <div>
    <textarea name="msg" id="msg" cols="30" rows="10" v-model="Message">Message</textarea>
  </div>
  <button type="submit">Submit</button>
</form>
    </div>
</template>
<script>
export default {
    name: 'ContactComp'
}
</script>
<style lang="">
    
</style>