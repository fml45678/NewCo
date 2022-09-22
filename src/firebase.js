// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions



const firebaseConfig = {
    apiKey: "AIzaSyBU-8Gx6Z78Mn4PWJUkE54zEtMYSg6JCaI",
    authDomain: "clone2-45aa6.firebaseapp.com",
    projectId: "clone2-45aa6",
    storageBucket: "clone2-45aa6.appspot.com",
    messagingSenderId: "911775760293",
    appId: "1:911775760293:web:e730c8014776919799f24c",
    measurementId: "G-6Z8ZBJD31G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };