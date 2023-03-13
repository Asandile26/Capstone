<template lang="">
    <div>
        <div class="registration">
            <form action=""  @click.prevent="onRegister">

            <h2>Register here</h2>
            <div class="inputR">
                <label for="name">Name</label>
                <input type="name" id="name">
            </div>
            <div class="inputR" >
                <label for="surname">Surname</label>
                <input type="surname" id="surname">
            </div>
            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>
            </div>
            <div>
            <label for="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required><br>
            </div>
            <label for="Gender">Gender:</label>    
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label>
            <button type="submit">Register</button>
            </form>
        </div>
    </div>
</template>
<script>

export default {
    name: 'RegistrationComp',
    methods: {
    onRegister() {
    
    }
  }
}
</script>
<style lang="">
    
</style>