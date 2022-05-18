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
                <p>{{ get_FireBase_adress }}</p>
              </span>
              <section class="container">
                <h2>Map</h2>
                <div>
               <GetMap />
                </div>
              </section>
            </button>
            <div v-if="imgUrl != null">
              <img class="preview" height="268" width="356" :src="imgUrl" />
              <br />
            </div>
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

import GetMap from '~/components/GetMap.vue';

export default {
  name: "account",
  components:{
    GetMap,
  },
   
   
  data() {
  
    return {
      //-- apropos des coordonnées
      get_FireBase_adress: "",
      get_FireBase_latitude : "",
      get_FireBase_longitude :"",
      get_FireBase_ville: "",
      get_FireBase_pays: "",
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

        this.get_FireBase_latitude = latitude;
        this.get_FireBase_longitude = longitude;
        this.get_FireBase_ville = ville;
        this.get_FireBase_pays = pays;
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
      return locationList;
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

