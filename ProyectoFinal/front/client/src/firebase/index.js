import * as firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBaE-qPfFMf0HgjcU33qSWC84sGrK9NhX8",
    authDomain: "onlinefinancelearning.firebaseapp.com",
    projectId: "onlinefinancelearning",
    storageBucket: "onlinefinancelearning.appspot.com",
    messagingSenderId: "673671645622",
    appId: "1:673671645622:web:76d791382faeb418469917",
    measurementId: "G-TMNNZ6WP98"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () =>  firebase.firestore(app);
