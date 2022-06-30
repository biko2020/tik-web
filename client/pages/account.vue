<template>
  <v-main light>
    <Head :connect="true" />

    <section>
      <div class="col-md-12 mt-5">
        <div class="card elevation-0 transparent">
          <div class="white--text text-right">
            <h5>Bien venu , {{ user.email }}</h5>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="table-responsive">
        <div class="col-md-12 mt-5">
          <v-btn color="primary" @click="getFireStoreCollection"
            >Afficher les Réclarations</v-btn
          >
        </div>
        <br />
        <table v-if="imgUrl != '' "  border="1" ref="tableref" >
          <tr class="white--text md-3 text--xs-center tr-bg">
            <th>Photo de Réclamation</th>
            <th>L'endroit de Réclamation</th>
            <th>Date Réclamation</th>
            <th colspan="2">Action</th>
            <th></th>
          </tr>
          <!--looper sur le tableau des images-->
          <tr v-for="(imgAnomalie, index) in imgUrl" :key="index">
            <td>
              <!-- Afficher l'image 
              <img :src="`${imgUrl}`" height="268" width="356" /> -->
              <img :src="imgAnomalie" />
            </td>
            <td>
              <!--Afficher la position (appel du composant GetMap)-->
              <GetMap :ListCoords="map[index]" />
            </td>
            <td>
              <!--Afficher les itinéraires-->
              <ul>
                <li>{{ date[index] }}</li>
              </ul>
            </td>
            <td>
              <v-btn
                color="error"
                small
                class="mr-2"
                @click="deleteReclamation"
              >
                Delete
              </v-btn>
            </td>
            <td>
              <v-btn color="success" small @click="updateReclamation()">
                Update
              </v-btn>
            </td>
          </tr>
        </table>
      </div>
    </section>
    <Footer />
  </v-main>
</template>

<script>
// importer les composants
import Head from "~/components/template/Head.vue";
import Footer from "~/components/template/Footer.vue";

import db from "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import {
  collection,
  where,
  query,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

import "firebase/compat/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import GetMap from "~/components/GetMap.vue";

export default {
  name: "account",
  components: {
    Head,
    GetMap,
    Footer,

},

  data() {
   
    return {
      //-- apropos des coordonnées
      map: [],
      imgUrl: [],
      date: [],
      user: "",
      currentPosition: "Mohammedia",
      
    };
  },

  methods: {
    connect: function () {
      this.connect = !this.connect;
    },

    async getFireStoreCollection() {
     
      // requet firestore pour récupérer ma collection      
      const locationCol = db
        .firestore()
        .collection("location")
        .where("ville", "==", this.currentPosition);
      const locationSnapshot = await getDocs(locationCol);
      //declaration taleaux d images
      var AnomalieImage = [];

      locationSnapshot.forEach((doc) => {
        // récuperer les champs de notre collection
        var latitude = doc.get("latitude");
        var longitude = doc.get("longitude");
        var place = doc.get("place");
        var ville = doc.get("ville");
        var pays = doc.get("pays");
        var imageName = doc.get("image");

        const timeStampDate = doc.get("date");
        const dateInMillis = timeStampDate.seconds * 1000;

        var date =
          new Date(dateInMillis).toDateString() +
          " à " +
          new Date(dateInMillis).toLocaleTimeString();

        // Stocker les donnees dans un tableau
        this.map.push([latitude, longitude, place, ville, pays]);

        this.date.push(date);
        AnomalieImage.push(imageName);
      });

      //boucle pour trouver les images dans firestore
      AnomalieImage.forEach((imageName) => {
        const storage = getStorage(); // declaration de storage
        const pathName = ref(storage, "images/" + imageName); // obtenir le chemaine de l'image.
        // Obtenir l'URL vers FireStoge avec la methode getDownloadURL
        getDownloadURL(pathName)
          .then((url) => {
            this.imgUrl.push(url); // affecter url obtenu au variable imgUrl"
          })
          .catch((error) => {
            // la liste des codes d'erreur , sur le lien ci-dessous
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/object-not-found.":
                // ficheir n'esxist pas
                break;
              case "storage/unauthorized":
                // L'utilisateur n'a pas l'autorisation d'accéder à l'objet
                break;
              case "storage/canceled":
                // L'utilisateur a annulé le téléchargement
                break;

              case "storage/unknown":
                // erreur inconnue
                break;
            }
          });
        return this.imgUrl;
      });
    },

    updateReclamation() {
      
    },
    deleteReclamation() {
      
    },
  },
  
  
  mounted() {
    db.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (!this.user) this.$router.push("/");
    });
    
  },
  
};
</script>

<style scope>
.tr-bg {
  background-color: rgb(88, 61, 4);
  font-size: 20px;
  color: #36405a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>