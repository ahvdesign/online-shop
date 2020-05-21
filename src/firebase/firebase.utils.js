import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyAvDgg2Xx2BN1FBuS2Sn0qHuz83QbY2z0I",
  authDomain: "ahv-shop.firebaseapp.com",
  databaseURL: "https://ahv-shop.firebaseio.com",
  projectId: "ahv-shop",
  storageBucket: "ahv-shop.appspot.com",
  messagingSenderId: "248979466008",
  appId: "1:248979466008:web:624f648ce1a1a874bf206d",
  measurementId: "G-2EVJSQ9CW9",
};

firebase.initializeApp(config);
firebase.analytics();

// Exporting this out to use anywhere that needs authentication
export const auth = firebase.auth();
// Not using this yet but getting it ready
export const firestore = firebase.firestore();

// Setting up the Google authentication
// 1. Pull the GoogleAuthProvider() from the auth library and name it provider
// 2. Set the parameters for the provider
// 3. Pass in the provider to signInWithPopup() from the auth library
// 4. Export the whole thing as signInWithGoogle()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Exporting the whole library in case it is needed for anything specific
export default firebase;
