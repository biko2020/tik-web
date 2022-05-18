<template>
  <div>
    <h1>Loalisation ...</h1>
    <section class="container">
      <div id="map">
        <button @click="initMap">
          <span>click ici</span>
          {{ lat }}
          {{ lng }}
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="400"
                height="300"
                id="gmap_canvas"
                v-bind:src="'https://maps.google.com/maps?q='+ lat +','+ lng +'&place_id='+place_Id+'&t=&z='+zoom+'&ie=UTF8&iwloc=&output=embed'"
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
  data() {
    return {
      // -- apropos de google Maps
      zoom: 13,
      lat: 0,
      lng: 0,
      place_Id: null,
      mapTypeId: "terrain",
    };
  },

  computed: {
    initMap() {
      this.lat = 33.67567567567568;
      this.lng = -7.383106133583412;
      this.place_Id ="MJG8+8VH";
    },
  },
};
</script>

<style>
</style>