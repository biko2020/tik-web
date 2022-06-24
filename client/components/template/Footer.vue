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
                  <div class="headline">company info</div>
                </v-card-title>
              <v-card-text>
                    We are not a company. We hate companies. Just imagine us like
                  the guys from the Silicon Valley series.
              </v-card-text>   
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0" transparent></v-card>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">We are hiring</div>
              </v-card-title>
              <v-card-text>
               Are you a creative person? Do you like techy stuff? Complete
                  the email form by writing your skills and interests
                </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

  <section>
    <v-container>
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
              Made with
              <v-icon class="red--text">favorite</v-icon>
              using
              <a
                class="white--text"
                href="#"
                target="_blank"
                >GitHub</a
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
            }
        }
    },
}
</script>
<style scope>
.social-icon {
    font-size: 21px;
    color: white
}
</style>