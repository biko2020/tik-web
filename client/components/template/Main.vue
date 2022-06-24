<template>
    <v-app light>
        <v-content>
       <section class="banniere">
        <v-parallax :src="imageLink.banniere" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-5 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              Participer à la réforme de service public
            </h1>
            <div
              class="white--text subheading mb-5 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000"
            >
              Tik est une application de réclamation par photo
            </div>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">la meilleur façon de réclamer.</h2>
              <span class="subheading">
                Plusieurs méthodes de réclamation, par photo, par Texte, par
                video, par voix.
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Poubelles</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Déchets</div>
                    </v-card-title>
                    <v-card-text>
                      Un déchet est un objet en fin de vie ou une substance 
                      ayant subi une altération physique ou chimique, qui ne 
                      présente alors plus d'utilité ou est destiné à l'élimination. 
                      Le mot vient de l'ancien français déchiet ou déchié, 
                      soit « la quantité perdue dans l'usage d'un produit », 
                      ce qui en reste après son utilisation.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Fosse septique</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Service Fosse septique</div>
                    </v-card-title>
                    <v-card-text>
                      La fosse septique est l'un des éléments constitutifs 
                      d'une installation d'assainissement non collectif. 
                      Elle reçoit uniquement les eaux-vannes. Quand elle reçoit 
                      l'ensemble des eaux-vannes et des eaux ménagères, on lui 
                      préfère alors l'appellation de fosse toutes eaux.
                      
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2"
                        >Éclairage public</v-icon
                      >
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Service Éclairage public</div>
                    </v-card-title>
                    <v-card-text>
                    L'éclairage public est l'ensemble des moyens d'éclairage mis 
                    en œuvre dans les espaces publics, à l'intérieur et à l'extérieur 
                    des villes, très généralement en bordures des voiries et places, 
                    nécessaires à la sécurité ou au confort des êtres humains.   
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
       </section>
 <section>
        <v-parallax :src="imageLink.accueil" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Gestion des réclamations </div>
            <em>Même au sein des meilleures entreprises, tout ne se passe pas toujours comme prévu : il n’est finalement pas toujours 
                si facile d’anticiper ni les attentes, ni les besoins de chacun des citoyens, la raison pour la quelle on besoin de Tik</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="#">
             INSCRIPTION
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
        </v-content>
    </v-app>
</template>
<script>
export default {
    name: "Main",
    data: function () {
        return {
            imageLink: {
                banniere: "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Fbanniere%2Fville.png?alt=media&token=d49fb417-0598-40a0-ad72-500dbe9e6fcc",
                 accueil : "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Faccueil%2Fbanniere_Home.jpg?alt=media&token=3c6a3b2c-3f89-4089-91da-e38711498217",
            },
        }
    },
}
</script>
<style scope>
.banniere {
    margin-top: 10px;
}
.banniere img {
    opacity: 0.2;
    position: absolute;
    z-index:1;
}
</style>