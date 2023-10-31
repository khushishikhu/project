// database/firebaseDb.js
import firebase from "firebase/compat/app";
//import * as firebase from 'firebase';
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDmNfTrM2LaXMqd61gGzOq_2WW-FaiNgFA",
    authDomain: "foodie-dea07.firebaseapp.com",
    projectId: "foodie-dea07",
    storageBucket: "foodie-dea07.appspot.com",
    messagingSenderId: "50161926080",
    appId: "1:50161926080:web:b0afb252d91896ca965225",
    measurementId: "G-XL8YLCE76W"
};

firebase.initializeApp(firebaseConfig);

export default firebase;