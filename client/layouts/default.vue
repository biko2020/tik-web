<template>
  <v-app light>   
    <div>
      <Head />
      <Main />
      <Forme />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Head from "~/components/template/Head.vue";
import Main from "~/components/template/Main.vue";
import Footer from "~/components/template/Footer.vue";
import Forme from "~/components/template/Forme.vue";


export default {
  name: "default",
  components : {
    Head,
    Main,
    Forme,
    Footer,
  },
 
};
</script>

