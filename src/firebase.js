import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlXiHcw5VC9vl_pWMSL_ddwguYYZSE3_g",
    authDomain: "challenge-3fa5b.firebaseapp.com",
    databaseURL: "https://challenge-3fa5b.firebaseio.com",
    projectId: "challenge-3fa5b",
    storageBucket: "challenge-3fa5b.appspot.com",
    messagingSenderId: "863887920912",
    appId: "1:863887920912:web:99007418dc1cb7cbfedf95"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};