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
            <div class="headline">Connéxion</div>
            <br />
          </v-flex>
          <v-flex xs8 offset-xs2>
            <v-card class="elevation-0 transprent">
              <v-card-text>
                <v-form>
                  <v-flex xs12 >
                    <v-text-field
                      
                      class="text-dark"
                      label="Email"
                      :rules="emailRules"
                      v-model="email"
                      hint="Entrer votre email"
                      presistent-hint
                      prepend-icon="mdi-email"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 >
                    <v-text-field
                      box
                      class="text-dark"
                      label="Password"
                      v-model="password"
                      prepend-icon="mdi-account-circle"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required]"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                    >
                    </v-text-field>
                  </v-flex>
                </v-form>
              </v-card-text>
              <v-felx xs12 class="text-xs-center">
                <v-card-actions>
                  <v-layout justify-center align-center>
                    <v-btn
                      color="blue lighten-2 mb-5"
                      dark
                      large
                      @click.prevent="press"
                      >Login</v-btn
                    >
                  </v-layout>
                </v-card-actions>
              </v-felx>
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
        emailMatch: () => "",
      },
      emailRules: [
        (v) => {
          return !!v || "E-mail est Obligatoire";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail doit être valide",
      ],
    };
  },
  //  computed:{
  //   isDisabled() {
  //     return this.email !== this.email || this.password !== this.password;
  //   }
  // },
  methods: {
    async press() {
      db.auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
@import "~/assets/css/logInOut";
</style>





