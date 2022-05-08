<template>
  <section class="container">
    <h2>
      Index page
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
        <button @click="getImage">
          <span>click image</span>
          <div v-if="imgUrl != null">
            <img class="preview" height="268" width="356" :src="imgUrl" />
          </div>
          <br />
        </button>
      </div>
    </h2>
  </section>
</template>

<script>
//import { db } from "~/plugins/firebase.js";
import db from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { collection, getDocs } from "firebase/firestore";
import "firebase/compat/storage";
import { getStorage, ref } from "firebase/storage";

export default {
  data() {
    return {
      adress: "",
      imgUrl: null,
      user: ""
    };
  },

  methods: {
    async getLocationData() {
      // recupérer les coords
      const locationCol = collection(db, "location");
      const locationSnapshot = await getDocs(locationCol);
      const locationList = locationSnapshot.docs.map((doc) => doc.data());

      this.adress = locationList;

      console.log("------>", this.adress);

          
      const storage = getStorage();
      const pathReference = ref(storage, 'images/minion.jpg');
      this.imgUrl = pathReference;

      return locationList;
    },

    //recupérer l'image

    getImage() {
      //return await imgUrl;
      console.log("**", this.imgUrl);
    },
  },
  
};
</script>

<style>
</style>