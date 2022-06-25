<template>
  <v-main light>
    <v-toolbar class="dark">
      <v-app-bar-nav-icon>
        <img :src="imageLink.logo" alt="Tik" height="100%"
      /></v-app-bar-nav-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Pour Réclalamtion</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="grey lighten-2" ><NuxtLink to="/">Home</NuxtLink> </v-btn>
        <v-btn text class="grey lighten-3"
          ><NuxtLink to="/signin">Authentification</NuxtLink>
        </v-btn>
        <v-btn text class="grey lighten-2"
          ><NuxtLink to="/signup">Inscription</NuxtLink></v-btn
        >
        <v-btn
          class="red lighten"
          v-if="connect"
          @click.prevent="deconnect"
          text
          >Déconnexion
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-main>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Head",
  props: {
    connect: false,
  },
  data: function () {
    return {
      title: "",
      imageLink: {
        logo: "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=825957b2-0420-4091-a386-3cc0ede75171",
      },
    };
  },
  methods: {
    async deconnect() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          // déconnect avec success.
        })
        .catch((error) => {
          // erreur de déconnection.
        });
    },
  },
};
</script>
<style scoped>
.dark {
  z-index: 1;
}
.dark img {
  object-fit: none;
  object-position: 50px 50px 50px 50px;
  border-radius: 100% 100% 100% 100%;
  margin-top: 85px;
  margin-left: 45px;
}
</style>