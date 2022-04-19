<template>
<div>
  
              <v-tabs align-with-title>
                <v-tab><nuxt-link to="/">Home</nuxt-link></v-tab>
                <v-tab><nuxt-link to="/signin">Sign In</nuxt-link></v-tab>
                <v-tab><nuxt-link to="/signup">Sign Up</nuxt-link></v-tab>
                <v-tab><alert v-if="user" @click="signOut">Sign Out</alert></v-tab>
               
              </v-tabs>
      
  
     <nuxt />
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
data() {
  return {
    user:''
  }
},
mounted() {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    this.user = user;
  })
},

methods :{
  signOut() {
    alert('signOut')
  }
}
}
</script>

