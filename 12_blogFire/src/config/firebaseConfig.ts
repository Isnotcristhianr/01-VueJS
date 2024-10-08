// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoDgtQqfK3Jd9ADP-8HZ1P6naWTjktvA",
  authDomain: "blog-vue-49ffd.firebaseapp.com",
  projectId: "blog-vue-49ffd",
  storageBucket: "blog-vue-49ffd.appspot.com",
  messagingSenderId: "736890795195",
  appId: "1:736890795195:web:5ddaf3e6614c688e51e59e"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

//provider
export const googleProvider = new GoogleAuthProvider();

//firestore
export const firestore = getFirestore(firebaseApp);

//storage
export const storage = getStorage(firebaseApp);