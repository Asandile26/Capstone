<template lang="">
   <div class="form">
        <div class="form-value">
            <form @submit.prevent="onLogIn">
                <h2>Login</h2>
                <div class="inputF">
                <label for="">Email:</label> 
                <input type="email" required placeholder="Enter your email" v-model="User.Email">                 
                </div><br><br>
                <div class="inputF">
                <label for="">Password:</label>
                <input type="password" required placeholder="Enter your password" v-model="User.password">                
                </div><br><br>
                <div class="forget">
                    <label for=""><input type="checkbox">Remember me: </label>
                    <a href=""><router-link to="/forgot">Forgot Password?</router-link></a>
                </div><br><br>
                <button type="submit">Log in</button>
                <div class="register">
                    <p>Don't have an account? <a href=""><router-link to="/register">Register</router-link> </a></p>
                </div>
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
   name: 'LoginComp',
   setup(){
    return {
        User:{
            Email: null,
            Password: null
        }
    }
   },
   methods: {
    onLogIn(e) {
        console.log(this.User)
      e.preventDefault();
      
    }
  }
}
</script>
<style lang="">
    
</style>