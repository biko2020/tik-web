<template>
    <v-main light>
        <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              Suivez-nous sur les réseaux sociaux
            </div>
          </v-layout>
          <v-layout justify-space-around justify-center>
            <v-icon x-large dark>fab fa-facebook-f</v-icon>

            <v-icon x-large dark>fab fa-twitter</v-icon>

            <v-icon x-large dark>fab fa-linkedin</v-icon>

            <v-icon x-large dark>fab fa-instagram</v-icon>

            <v-icon x-large dark>fab fa-discord</v-icon>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">About Tik</div>
                </v-card-title>
              <v-card-text>
                   Nous ne sommes pas une entreprise. 
                   Nous détestons les entreprises. 
                   Imaginez-nous comme les gars de la série Silicon Valley.
              </v-card-text>   
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0" transparent></v-card>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contater-Nous</div>
              </v-card-title>
              <v-card-text>
               Veuillez Nous contacter via  le formulaire de notre site web 
               ou via notre adresse e-amil : aitoufkirbrahimab@gmail.com
                </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

  <section>
    <v-container class="logo">
      <v-layout>
        <v-flex xs12 class="text-xs-center">
          <img :src="imageLink.logo" height="200px">
        </v-flex>
      </v-layout>
    </v-container>
  </section>

   <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12 class="text-xs-center">
            <div class="white--text ml-3">
              Copyright &copy;
              <v-icon class="White--text">{{currentDate.getFullYear()}}</v-icon>
              using
              <a
                class="white--text"
                href="#"
                target="_blank"
                >TIK</a
              >
            </div>
          </v-flex>
        </v-layout>
      </v-footer>

    </v-main>

</template>

<script>
export default {
    name: "Footer",

    data: function () {
        return {
            imageLink: {
                 social_cover : "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Fsocial%2F%C3%A9clairage-urbain.jpg?alt=media&token=d6dda52b-1ccc-41d8-a23d-ed6bc9ed7374",
                 logo: "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=825957b2-0420-4091-a386-3cc0ede75171",
            },
            currentDate: new Date,
        }
    },
}
</script>

<style scope>
.logo img {
 border-radius: 100%;
}
.social-icon {
    font-size: 21px;
    color: white
}
.darken-2 {
  font-weight: 400;
  font-size: 20px;
}
</style>