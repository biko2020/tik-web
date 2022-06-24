<template>
    <v-main light>
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

        </v-content>
    </v-main>
</template>
<script>
export default {
    name: "Main",
    data: function () {
        return {
            imageLink: {
                banniere: "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Fbanniere%2Fville.png?alt=media&token=d49fb417-0598-40a0-ad72-500dbe9e6fcc",
                 
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