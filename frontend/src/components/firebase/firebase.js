import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKmW_CU_GgbdEQzu2LCi1nxayCc2gf3Qc",
    authDomain: "tripolicrafts.firebaseapp.com",
    projectId: "tripolicrafts",
    storageBucket: "tripolicrafts.appspot.com",
    messagingSenderId: "1013633415712",
    appId: "1:1013633415712:web:94c4a8f60a5fa5d2d11a45"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
