import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyCuMNu0ODNFq2iP601trPZBue6b8lkDJXY",
  authDomain: "signal-clone-2eab7.firebaseapp.com",
  projectId: "signal-clone-2eab7",
  storageBucket: "signal-clone-2eab7.appspot.com",
  messagingSenderId: "1093761091579",
  appId: "1:1093761091579:web:7373ea4c8157403cd02d5e"
})

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { db, auth }