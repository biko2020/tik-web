<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title v-if="!user" v-text="item.title" />
            <v-list-item-title v-if="user" @click="signout" v-text="SignOut" />
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />  
      <v-toolbar-title v-text="title" />
      <v-spacer />
       </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>


<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

export default {

  name: 'DefaultLayout',
  data () {
    return {
      user:'',
      SignOut:"Sign Out",
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Sign In',
          to: '/signin'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Sign Up',
          to: '/signup'
        },
        
      ],
      title: 'Tik'
    }
  },
  
  mounted() {
   firebase.auth().onAuthStateChanged(user => {
    this.user = user;
  })
},

 methods :{
    signout() {
    firebase.auth().signOut().then(result => {
      this.user = ''
      this.$router.push('/')
    })
    }
 }
}
</script>
