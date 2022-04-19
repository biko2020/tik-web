<template>
  <div class="container">
      <div class="d-flex flex-row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                  <div class="card-header">
                      Sign In
                  </div>
                  <div class="card-body">
                      <form  @submit.prevent="press">
                          <div class="form-group">
                              <input type="text" placeholder="Email" v-model="email" class="form-control">
                          </div>
                          <div class="form-group">
                              <input type="password" placeholder="Password" v-model="password" class="form-control">
                          </div>
                          <button>Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
   data() {
       return {
           email: '',
           password:'',
           errors: '',
       }
   },

   methods: {
       press() {
         firebase.auth().signInWithEmailAndPassword(this.email, this.password)
         .then(user => {
             this.$router.push('/account')
         }).catch(error => {
             this.errors = error;
         })
       }
   },
}
</script>

<style>

</style>