<template>
    <v-main light>
       <v-content>
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
    </v-main>
</template>
<script>
export default {
    name: "Main",
    data: function () {
        return {
            imageLink: {
                 accueil : "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Faccueil%2Fbanniere_Home.jpg?alt=media&token=3c6a3b2c-3f89-4089-91da-e38711498217",
            },
        }
    },
}
</script>
<style scope>

</style>