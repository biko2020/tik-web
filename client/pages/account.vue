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
            <button @click="getLocationData">
              <span>
                read coords
                <p>{{ adress }}</p>
              </span>
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

export default {
  data() {
    return {
      adress: "",
      imgUrl: null,

      user: "",
    };
  },

  methods: {
    
    async getLocationData() {
      // recupérer les coords
      const locationCol = db.firestore().collection("location");
      const locationSnapshot = await getDocs(locationCol);
      const locationList = locationSnapshot.docs.map((doc) => doc.data());

      this.adress = locationList;

      console.log("------>", this.adress);


const storage = getStorage();
const pathName = ref(storage, 'images/minion.jpg');

// Get the download URL
getDownloadURL(pathName)
  .then((url) => {
    // Insert url into an <img> tag to "download"
    this.imgUrl = url;
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found.':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
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

