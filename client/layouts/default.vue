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
  data: function () {
    return {
      title: "",
      imageLink: {
        logo: "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Flogo%2Flogo.png?alt=media&token=825957b2-0420-4091-a386-3cc0ede75171",
        banniere:
          "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Fbanniere%2Fville.png?alt=media&token=d49fb417-0598-40a0-ad72-500dbe9e6fcc",
        accueil : "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Faccueil%2Fbanniere_Home.jpg?alt=media&token=3c6a3b2c-3f89-4089-91da-e38711498217",
        social_cover : "https://firebasestorage.googleapis.com/v0/b/tikdb-c8174.appspot.com/o/images%2Fsocial%2F%C3%A9clairage-urbain.jpg?alt=media&token=d6dda52b-1ccc-41d8-a23d-ed6bc9ed7374",
      },
      email: "",
      emailRules : [
        (v) => {
          return !!v || "E-mail est Obligatoire";
        },
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail doit être valide",
      ],
      subscribed: false,
    };
  },
  methods: {
    subscribe : function (){
      this.subscribed = !this.subscribed;
    },
  }
};
</script>

<style scoped>
.dark {
  z-index: 1;
}
.dark img {
  object-fit: none;
  object-position: 50px 10px 10px 10px;
  border-radius: 100% 100% 100% 100%;
  margin-top: 80px;
}
.banniere {
  margin-top: 10px;
}
.banniere img {
  opacity: 0.2;
  position: absolute;
  z-index: 0;
}
.social-icon {
  font-size: 21px;
  color: white;
}
</style>