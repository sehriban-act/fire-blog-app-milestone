// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA-L-DVzSMf2pbmQAL1HYQnbBKjz_b3tT8",

  authDomain: "fire-blog-f94db.firebaseapp.com",

  projectId: "fire-blog-f94db",

  storageBucket: "fire-blog-f94db.appspot.com",

  messagingSenderId: "244641242132",

  appId: "1:244641242132:web:66db848a27e4468e025b01"

};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export default firebase;
export const auth=getAuth(firebase)
export const googleProvider = new GoogleAuthProvider();
