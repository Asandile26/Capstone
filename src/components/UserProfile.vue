<template lang="">
    <div>
        <div class="registration">
            <form v-for="User in Users" :key="User">
            <h2>User Profile</h2>
            <div class="inputp">
                <label for="UserId">UserID: {{User.userID}}</label>
                <input type="number" id="userID" name="userID">
            </div><br><br>
            <div class="inputp">
                <label for="firstName">First Name: {{User.firstName}}</label>
                <input type="text" id="firstName" name="firstName">
            </div><br><br>
            <div class="inputp" >
                <label for="lastName">Last Name:{{User.lastName}}</label>
                <input type="text" id="lastName" name="lastName">
            </div><br><br>
            <div class="inputp">
            <label for="Gender">Gender: {{User.gender}}</label>    
            <input type="text" id="male">
            </div>
            <div class="inputp">
                <label for="number">CellphoneNumber: {{User.cellphoneNumber}}</label>
                <input type="numbers" name="cellphoneNumber">
            </div><br><br>
            <div>
                <label for="Email">Email: {{User.email}}</label>
                <input type="Email" name="EmailAdd">
            </div><br><br>
            <div class="inputp">
            <label for="userRole">userRole:{{User.userRole}}</label>
            <input type="text" id="userRole" name="userRole"> 
            </div><br><br>
            <div class="inputp">
            <label for="userProfile">userProfile: {{User.userProfile}}</label>
            <input type="text" id="userProfile" name="userProfile"> 
            </div><br><br>
            <div class="inputp">
            <label for="joinDate">joinDate: {{User.joinDate}}</label>
            <input type="text" id="joinDate" name="joinDate"> 
            </div><br><br>
            <button type="submit">Register</button>
            </form>
        </div> 
    </div>
</template>
<script>
export default {
   name: 'UserProfile' 
}
</script>
<style lang="">
    
</style>