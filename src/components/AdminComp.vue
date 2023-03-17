<template lang="">
    <div>
        <h2>User Table</h2>
        <Spinner class="spinner" v-if="isLoading" />
            <div v-else></div>
        <table class="table">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Cell N.O</th>
      <th scope="col">Email</th>
      <th scope="col">User Role</th>
      <th scope="col">User Profile</th>
      <th scope="col">Join Date</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="items in userTable" :key="items">
     <td>{{items.firstName}}</td>
    <td>{{items.lastName}}</td>
    <td>{{items.gender}}</td>
    <td>{{items.emailAdd}}</td>
    <td>***{{items.userPass}}***</td>
    <td>{{items.userRole}}</td>
    <td>{{items.userProfile}}</td>
    <td>{{items.joinDate}}</td>
    <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteProduct(items.userID)">Delete</button>
    </td>
    <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateProduct(items.userID)">Update</button>
    </td>
    </tr>
  </tbody>
</table> 
            <h2>Product Table</h2>
            <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">prodName</th>
              <th scope="col">category</th>
              <th scope="col">price</th>
              <th scope="col">size</th>
              <th scope="col">imgURL</th>
              <th scope="col">color</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in productTable" :key="items">
              <td>{{items.prodName}}</td>
              <td>R{{items.category}}</td>
              <td>R{{items.price}}</td>
              <td>{{items.size}}</td>
              <td>{{items.imgURL}}</td>
              <td>{{items.color}}</td>
              <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteProduct(items.prodID)">Delete</button>
              </td>
              <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateProduct(items.prodID)">Update</button>
              </td>
             </tr>
          </tbody>
        </table>

    </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
 setup(){
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers")
      const products = computed(() => store.state.Products);
      const users = computed(()=> store.state.Users)
      return {
        products,
        users
      }
 }   
}
</script>
<style lang="">
    
</style>