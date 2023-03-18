<template lang="">
    <div>
        <form @submit.prevent="handleSubmit">
        <div class="inputR">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" placeholder="Enter first name" v-model="payload.firstName">
            </div><br><br>
            <div class="inputR" >
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" placeholder="Enter last name" v-model="payload.lastName">
            </div><br><br>
            <div>
            <label for="Gender">Gender:</label>    
            <input type="radio" id="male" name="gender" value="male" v-model="payload.gender">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female" v-model="payload.gender">
            <label for="female">Female</label><br>
            <input type="radio" id="other" name="gender" value="other" v-model="payload.gender">
            <label for="other">Other</label>
            </div>
            <div>
                <label for="number">cellphoneNumber:</label>
                <input type="numbers" name="cellphoneNumber" placeholder="Enter your number" v-model="payload.cellphoneNumber">
            </div><br><br>
            <div>
                <label for="Email">Email:</label>
                <input type="Email" name="EmailAdd" placeholder="Enter your email" v-model="payload.EmailAdd">
            </div><br><br>
            <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="userPass" placeholder="Enter password" required v-model="payload.userPass">
            </div><br><br>
            <div>
            <label for="userRole">userRole:</label>
            <input type="text" id="userRole" name="userRole" placeholder="User" required v-model="payload.userRole">
            </div><br><br>
            <div>
            <label for="userProfile">userProfile:</label>
            <input type="text" id="userProfile" name="userProfile" placeholder="Initial and Last name" required v-model="payload.userProfile">
            </div><br><br>
            payload
            <div>
            <label for="joinDate">joinDate:</label>
            <input type="text" id="joinDate" name="joinDate" placeholder="Enter todays date
            " required v-model="payload.joinDate">
            </div><br><br>


 
      <button type="submit">Submit</button>
    </form>

    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
    const payload = {
      firstName: '',
      lastName: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userRole: '',
      userProfile: '',
      joinDate: ''
    };
    const store = useStore();
    const addUser = ()=> {
      store.dispatch("addUser", payload);
      store.dispatch("fetchUsers")
      console.log(payload,alert('user successfully registered'));  
    }
    const AU = computed( ()=>
        store.state)
        return {
        payload,
        addUser,
        AU,
      
      }
  
}
  
  
    }
</script>
<style lang="">
    
</style>