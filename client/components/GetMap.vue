<template>
  <div>

    <h1>Loalisation ...</h1>    
    <div v-for="(value,index) in ListCoords" :key="index">
       {{value}}
       
    </div>
    <h1> ********** here latitude and longitude************</h1>
    {{put_Map_latitude}}
    {{put_Map_longitude}}
    <section class="container">
      <!-- Afficher le Map -->
      <div id="map">
        <button @click="putPositionMap">
          <span >click ici</span>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="400"
                height="300"
                id="gmap_canvas"
                v-bind:src="
                  'https://maps.google.com/maps?q=' +
                  put_Map_latitude +
                  ',' +
                  put_Map_longitude +
                  '&place_id=' +
                  place_Id +
                  '&t=&z=' +
                  zoom +
                  '&ie=UTF8&iwloc=&output=embed'
                "
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GetMap",
  props:{
    ListCoords: {
      type: Array,
      required: true,
     },
},

  data() {
    return {
      zoom: 13,
      put_Map_latitude: 0,
      put_Map_longitude: 0,
      place_Id: null,
      mapTypeId: "terrain",
    };
  },

  methods: {
    putPositionMap() {
        this.put_Map_latitude = this.ListCoords[0];
        this.put_Map_longitude = this.ListCoords[1];
        this.place_Id  = this.ListCoords[2];
    },
  },

};
</script>

<style>
</style>