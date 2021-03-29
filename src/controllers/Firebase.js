import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChudqFKcGsfoRmTqyQ50pCRXlBkNZYKoE",
  authDomain: "race-challenge-app.firebaseapp.com",
  projectId: "race-challenge-app",
  storageBucket: "race-challenge-app.appspot.com",
  messagingSenderId: "32902749947",
  appId: "1:32902749947:web:a2b027e3ed18d60f485a5e",
  measurementId: "G-01EJ9NP8FV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
