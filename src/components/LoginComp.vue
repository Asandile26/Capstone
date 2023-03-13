<template lang="">
   <div class="form">
        <div class="form-value">
            <form action="">
                <h2>Login</h2>
                <div class="inputF">
                <input type="email" required placeholder="Please enter your email" v-model="Email">
                <label for="">Email</label>                    
                </div>
                <div class="inputF">
                <input type="password" required placeholder="Please enter your password" v-model="password">
                <label for="">password</label>                    
                </div>
                <div class="forget">
                    <label for=""><input type="checkbox">Remember me</label>
                    <a href="">Forgot Password?</a>
                </div>
                <button>Log in</button>
                <div class="register">
                    <p>Don't have an account? <a href=""><router-link to="/register">Register</router-link> </a></p>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
   name: 'LoginComp' 
}
</script>
<style lang="">
    
</style>