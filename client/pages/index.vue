<template>
  <v-app light>   
    <div>
      <Head />
      <Banniere />
      <TextColumn />
      <Main />
      <Forme />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Head from "~/components/template/Head.vue";
import Banniere from "~/components/template/Banniere.vue";
import TextColumn from "~/components/template/TextColumn.vue";
import Main from "~/components/template/Main.vue";
import Forme from "~/components/template/Forme.vue";
import Footer from "~/components/template/Footer.vue";



export default {
  name: "default",
  components : {
    Head,
    Banniere,
    TextColumn,
    Main,
    Forme,
    Footer,
  },
 
};
</script>

