import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import firebase from 'firebase/app'
// import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    // récuperer la cle via la variable NUXT_APP_FIREBASE_KEY depuis le fichier .env
    apiKey: process.env.NUXT_APP_FIREBASE_KEY,
    authDomain: "tikdb-c8174.firebaseapp.com",
    databaseURL: "https://tikdb-c8174-default-rtdb.firebaseio.com",
    projectId: "tikdb-c8174",
    storageBucket: "tikdb-c8174.appspot.com",
    messagingSenderId: "798779039009",
    appId: "1:798779039009:web:fbe7adb937af0a3ea73260",
    measurementId: "G-YFE0C8G63Y",
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}
export default db = firebase.firestore();
