<template>
<v-main light>
    <Head />

    <br />
    <div class="titre">
      <h5></h5>
    </div>
    <section>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
            <div class="headline">Inscrivez-vous!</div>
            <br />
          </v-flex>
          <v-flex xs8 offset-xs2>
            <v-card class="elevation-0 transprent">
              <v-card-text>
                <v-form>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      class="text-dark"
                      label="Email"
                      :rules="emailRules"
                      v-model="email"
                      prepend-icon="mdi-email"
                      hint="Entrer votre email"
                      presistent-hint
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field
                      class="text-dark"
                      label="Password"
                      v-model="password"
                      prepend-icon="mdi-account-circle"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      hint="Minimum de 8 caractères"
                      counter
                      @click:append="show1 = !show1"
                    >
                    </v-text-field>
                  </v-flex>
                </v-form>
              </v-card-text>
              <v-flex xs12 class="text-xs-center">
                <v-card-actions>
                  <v-layout justify-center align-center>
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click.prevent="press"
                      >INSCRIPTION</v-btn
                    >
                  </v-layout>
                </v-card-actions>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <TextColumn />
    <Footer />
  </v-main>
</template>

<script>
import Head from "~/components/template/Head.vue";
import TextColumn from "~/components/template/TextColumn.vue";
import Footer from "~/components/template/Footer.vue";

import db from "firebase/compat/app";
import "firebase/compat/auth";
//import { db } from "~/plugins/firebase.js";
//import 'firebase/compat/firestore';

export default {
  components: {
    Head,
    TextColumn,
    Footer,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      show1: false,
      rules: {
        required: (value) => !!value || "Obligatoire.",
        min: (v) => v.length >= 8 || "Minimum 8 caractères",
        emailMatch: () => "E-mail et mot de passe incorrect",
      },
      emailRules: [
        (v) => {
          return !!v || "E-mail est Obligatoire";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail doit être valide",
      ],
      subscribed: false,
    };
  },

  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },

    async press() {
      db.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push("/account");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>

<style>
@import "~assets/css/logInOut";
</style>