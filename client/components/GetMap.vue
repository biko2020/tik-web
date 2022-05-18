<template>
  <div>
    <h1>Loalisation ...</h1>
    <section class="container">
      <div id="map">
        <button @click="putPositionMap">
          <span>click ici</span>
          {{ put_Map_latitude }}
          {{ put_Map_longitude }}
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
   props : {
     getMapCoodrs:Array
   },
  data() {
    return {
      // -- apropos de google Maps
      zoom: 13,
      put_Map_latitude: 0,
      put_Map_longitude: 0,
      place_Id: null,
      mapTypeId: "terrain",
    };
  },

  computed: {
    putPositionMap() {
      this.put_Map_latitude = getMapCoodrs[0];
      // this.place_Id =place;
      console.log("*********", this.put_Map_latitude);
    },
  },
};
</script>

<style>
</style>