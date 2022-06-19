<template>
<v-content>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card 
        color="primary"
        elevation="12"
        title="connexion"
        >
        <v-card-text>
          <v-form>
            <v-text-field class = "text-dark"
            type="text" 
            v-model="email" 
            prepend-icon='mdi-email'
            name="email" 
            label="E-mail" 
            ></v-text-field>
           <v-text-field class = "text-dark"
            v-model="password"
            prepend-icon='mdi-account-circle'
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            hint="Minimum de 8 caractères"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center align-center>
            <v-btn color="success"  @click.prevent="press" >Login</v-btn>
          </v-layout>
        </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>

import db from 'firebase/compat/app';
import 'firebase/compat/auth';
//import { db } from "~/plugins/firebase.js";
//import 'firebase/compat/firestore';

export default {
   data() {
       return {
           email: '',
           password:'',
           errors:'',
           show1:false,
      rules: {
        required : value => !! value || 'Obligatoire.',
        min: v => v.length >= 8 || 'Minimum 8 caractères',
        emailMatch: () =>('E-mail et mot de passe incorrect'),
      },
       }
   },

   methods: {
      async press() {
           // 1. Load the service
           //await this.$fire.auth.authReady()
           // 2. Use the service
           //await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

         db.auth().createUserWithEmailAndPassword(this.email, this.password)
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
@import "~assets/css/logInOut";
</style>