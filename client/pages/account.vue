<template>
  <div class="containe">
    <section>
      <div class="col-md-12 mt-5">
        <div class="card">
          <div class="card-header">
            Account:
            <h3>Bien Venu , {{ user.email }}</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="d-flex justify-content-start">
      <section class="container">
        <h1 @click="getLocationFireBaseData()">Afficher les Réclarations</h1>
        <table v-if="imgUrl != ''">
          <tr>
            <th>Image</th>
            <th>Map</th>
            <th>Adresse</th>
            <th>Action</th>
          </tr>
          <!--looper sur le tableau des images-->
          <tr v-for="(imgAnomalie, index) in imgUrl" :key="index">
            <td>
              <!-- Afficher l'image 
              <img :src="`${imgUrl}`" height="268" width="356" /> -->
              <img :src="imgAnomalie" height="268" width="356" />
            </td>
            <td>
              <!--Afficher la position (appel du composant GetMap)-->
              <GetMap :ListCoords="map[index]" />
            </td>
            <td>
              <!--Afficher les itinéraires-->
              <ul>
                <li>{{ map[index] }}</li>
              </ul>
            </td>
            <td>-- ToDo --</td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
//import { db } from "~/plugins/firebase.js";

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
    GetMap,
  },

  data() {
    return {
      //-- apropos des coordonnées
      map: [],
      imgUrl: [],
      user: "",
      currentPosition:"New York",
    };
  },

  methods: {
    async getLocationFireBaseData() {
      // requet firestore pour récupérer ma collection
      const locationCol = db
        .firestore()
        .collection("location")
        .where("ville", "==", this.currentPosition );
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

        // Stocker les donnees dans un tableau
        this.map.push([latitude, longitude, place, ville, pays]);
        AnomalieImage.push(imageName);
      });

      //boucle pour trouver les images dans firestore
      AnomalieImage.forEach((imageName) => {
        const storage = getStorage(); // declaration de storage
        const pathName = ref(storage, "images/" + imageName); // obtenir le chemaine de l'image.
        // Obtenir l'URL avec la methode getDownloadURL
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
  },
  mounted() {
    db.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (!this.user) this.$router.push("/");
    });

    // adresser les  coordonnees au composant GetMap
  },
};
</script>

