<template>
  <div v-if="ListCoords != null" :click="showCoords()">
    <section class="container">
      <!-- Afficher le Map -->
      <div id="map">
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GetMap",
  props: {
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
      ville: "",
      mapTypeId: "terrain",
    };
  },

  methods: {
    showCoords() {
      //récuperer les varialbes des itinéraires

      this.put_Map_latitude = this.ListCoords[0];
      this.put_Map_longitude = this.ListCoords[1];
      this.place_Id = this.ListCoords[2];
      this.ville = this.ListCoords[3];

      console.log('//////////-----> ', this.ListCoords);
    },
  },
};
</script>

<style>
</style>