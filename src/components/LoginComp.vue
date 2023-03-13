<template lang="">
   <div class="form">
        <div class="form-value">
            <form action="">
                <h2>Login</h2>
                <div class="inputF">
                <label for="">Email:</label> 
                <input type="email" required placeholder="Please enter your email" v-model="Email">                 
                </div>
                <div class="inputF">
                <label for="">Password:</label>
                <input type="password" required placeholder="Please enter your password" v-model="password">                
                </div>
                <div class="forget">
                    <label for=""><input type="checkbox">Remember me: </label>
                    <a href=""><router-link to="/forgot">Forgot Password?</router-link></a>
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