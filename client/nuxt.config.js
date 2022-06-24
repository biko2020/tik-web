import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - tik",
    title: "tik",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
   
    script : [{

    }],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'foundation-sites/dist/css/foundation.min.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],


  plugins: [
    '~/plugins/client-only/foundation.client.js',
    // '~/plugins/firebase.js'
    // pour google map
    // documentation: https://diegoazh.github.io/gmap-vue/#officially-supported-components
    //{ src: './plugins/gmap-vue.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // ajouter le contenu de la cle apiKey(package.json) au variable d'environmenet
  env: {
    NUXT_APP_FIREBASE_KEY: process.env.NUXT_APP_FIREBASE_KEY,
  },

  ssr: false, // Disable Server Side rendering


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyB5A15SMv2StYYZrHzu_I1sG1VnmKmuNeM",
          authDomain: "tikdb-c8174.firebaseapp.com",
          databaseURL: "https://tikdb-c8174-default-rtdb.firebaseio.com",
          projectId: "tikdb-c8174",
          storageBucket: "tikdb-c8174.appspot.com",
          messagingSenderId: "798779039009",
          appId: "1:798779039009:web:fbe7adb937af0a3ea73260",
          measurementId: "G-YFE0C8G63Y",
        },

        services: {
          auth: true,
          firestore: true,
          storage: true,
          database: true,
          functions: false,
          messaging: false,
          performance: false,
          analytics: false,
          remoteConfig: false,
        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
