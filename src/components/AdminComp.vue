<template lang="">
    <div>
      <h2>User Table</h2>
    <SpinnerCompVue class="spinner" v-if="isLoading" />
    <table v-else class="table">
      <thead class="table-dark">
        <tr>
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
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.gender}}</td>
          <td>{{user.cellphoneNumber}}</td>
          <td>{{user.emailAdd}}</td>
          <td>{{user.userRole}}</td>
          <td>{{user.userProfile}}</td>
          <td>{{user.joinDate}}</td>
          <td>
            <button type="button" class="btn btn-outline-warning" @click.prevent="updateUser(user.id)">Update</button>
          </td>
          <td>
            <button type="button" class="btn btn-outline-danger" @click="$event=>deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
          </table> 

           <h2>Product Table</h2>
    <SpinnerCompVue class="spinner" v-if="isLoading" />
    <table v-else class="table">
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
        <tr v-for="product in products" :key="product.id">
          <td>{{product.prodName}}</td>
          <td>{{product.category}}</td>
          <td>{{product.price}}</td>
          <td>{{product.size}}</td>
          <td>{{product.imgURL}}</td>
          <td>{{product.color}}</td>
          <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteProduct(product.prodID)">Delete</button>
              </td>
              <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateProduct(product.prodID)">Update</button>
              </td>
             </tr>
          </tbody>
        </table>

    </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import SpinnerComp from './SpinnerComp.vue';
export default {
  name: 'SpinnerComp',
 setup(){
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers")
      const products = computed(() => store.state.Products);
      const users = computed(()=> store.state.Users)
      return {
        products,
        users,
        SpinnerComp
      }
 },
 data () {
        return {
          isloading: true
        }
      },
      created(){
        setTimeout(()=>{
          this.isloading = false
        },1000)
      },
      methods:{
        deleteUser(id){
          this.$store.dispatch('deleteUser',id)
        }
      }  
}
</script>
<style lang="">
    
</style>