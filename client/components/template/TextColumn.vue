<template>
    <v-main light>
        <v-content>
      
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
        </v-content>
    </v-main>
</template>
<script>
export default {
    name: "TextColumn",
    
}
</script>
<style scope>

</style>