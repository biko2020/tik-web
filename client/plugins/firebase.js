import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB5A15SMv2StYYZrHzu_I1sG1VnmKmuNeM",
  authDomain: "tikdb-c8174.firebaseapp.com",
  databaseURL: "https://tikdb-c8174-default-rtdb.firebaseio.com",
  projectId: "tikdb-c8174",
  storageBucket: "tikdb-c8174.appspot.com",
  messagingSenderId: "798779039009",
  appId: "1:798779039009:web:9645e76a46f30bada73260"
};

// Initialize Firebase
let app = null;

if(!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);

}

//const app = initializeApp(firebaseConfig);
export default firebase;

