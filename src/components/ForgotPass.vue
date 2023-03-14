<template lang="">
    <div class="forgot">
        <form action="https://formspree.io/f/mwkjqqzd" method="POST"  @submit.prevent="onForgot">
            <h2>FORGOT PASSWORD</h2>
            <div>
            <label for="email">Email:</label>
            <input type="email" name="Email" placeholder="Enter email" v-model="User.Email">
            </div>
            <button type="submit">Send</button>
        </form> 
        
    </div>
</template>
<script>
export default {
    name: 'ForgotPass',
    data(){
        return {
            User: {
                email: null
            }
        }
    },
    methods: {
        onForgot(){}
    }
}
</script>
<style lang="">
    
</style>