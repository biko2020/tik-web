import Vue from 'vue';
import GmapVue from 'gmap-vue';
import { inspect } from 'util';

export default function ({ $config }) {
  console.log(inspect(GmapVue));

  Vue.use(GmapVue, {
    load: {
      key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
      libraries: 'places,visualization,drawing',
    },
    installComponents: true,
  });
}

