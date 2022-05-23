<template>
  <div class="containe">
    <div class="d-flex justify-content-start">
      <div class="col-md-6 mt-5">
        <div class="card">
          <div class="card-header">Account</div>
          <div class="card-body">
            <h3>Bien Venu , {{ user.email }}</h3>
            <h2>Read from Firestore.</h2>
          </div>
        </div>
      </div>
      <section class="container">
        <h2>
          this is coords
          <div>
            <button @click="getLocationFireBaseData">
              <span>
                read coords
                {{ adress }}
              </span>
              <section class="container">
                <div>
                  <!-- Appel du composant GetMap  -->
                  <GetMap :ListCoords="coordonnees" />
                </div>
              </section>
              <section class="container">
                <!-- Afficher l'image -->
                <h2>Image</h2>
                <div v-if="imgUrl != null">
                  <img :src="`${imgUrl}`" height="268" width="356" />
                  <br />
                </div>
              </section>
            </button>
          </div>
        </h2>
      </section>
    </div>
  </div>
</template>

<script>
//import { db } from "~/plugins/firebase.js";

import db from "firebase/compat/app";
import "firebase/compat/auth";

import "firebase/compat/firestore";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

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
      adress: "",
      coordonnees: [],
      get_FireBase_ImageName: "",
      imgUrl: null,
      user: "",
    };
  },

  methods: {
    async getLocationFireBaseData() {
      // recupérer les coords
      const locationCol = db.firestore().collection("location");
      const locationSnapshot = await getDocs(locationCol);
      const locationList = locationSnapshot.docs.map((doc) => doc.data());

      locationList.forEach((iteneraire) => {
        //console.log(iteneraire.coords.latitude);
        const latitude = iteneraire.latitude;
        const longitude = iteneraire.longitude;
        const place = iteneraire.place;
        const ville = iteneraire.ville;
        const pays = iteneraire.pays;
        const imageName = iteneraire.image;

        this.adress =
          " Latitude : " +
          latitude +
          " Langitude :  " +
          longitude +
          " Place : " +
          place +
          " Ville : " +
          ville +
          " Pays : " +
          pays;
        this.coordonnees = [latitude, longitude, place, ville];
        this.get_FireBase_ImageName = imageName;
      });

      const storage = getStorage();
      const pathName = ref(storage, "images/" + this.get_FireBase_ImageName);

      // Obtenir l'URL avec la methode getDownloadURL
      getDownloadURL(pathName)
        .then((url) => {
          // affecter url obtenu au variable imgUrl"
          this.imgUrl = url;
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

