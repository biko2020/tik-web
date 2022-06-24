<template>
    <v-main ligth>
         <section>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center class="mt-5">
              <div class="headline">Inscrivez-vous!</div>
              <br>
              <div>Formulaire</div>
            </v-flex>
            <v-flex xs8 offset-xs2>
              <v-card class="elevation-0 transprent">
                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">

                  <v-text-field  box label="Email" :rules="emailRules" v-model="email" hint="Entrer votre email" persistent-hint></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                  <v-text-field box multi-line label="Password"></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                  <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Inscription</v-btn>
                  </v-flex>
                   <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>Bien venu!</v-btn>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

    </v-main>
</template>
<script>
export default {
    name: "forme",

    data: function() {
        return {
        email: "",
        emailRules : [
        (v) => {
          return !!v || "E-mail est Obligatoire";
        },
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail doit être valide",
      ],
      subscribed: false,
        }
    },

    methods: {
        subscribe : function () {
            this.subscribed = ! this.subscribed;
        },
    }
};
   
</script>