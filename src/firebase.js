import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0C0V-MgWxoRP_hD_oGWmZkx_k6C_D78E",
    authDomain: "ditto-441c4.firebaseapp.com",
    databaseURL: "https://ditto-441c4.firebaseio.com",
    projectId: "ditto-441c4",
    storageBucket: "ditto-441c4.appspot.com",
    messagingSenderId: "83151229190",
    appId: "1:83151229190:web:e5bd6c951f152722490e87",
    measurementId: "G-Q2KG7YC8WB"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }

