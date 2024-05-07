// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZP2GIkceosv40oR2bmnH4njf_rJHXQHY",
  authDomain: "carejoa-motionbit.firebaseapp.com",
  projectId: "carejoa-motionbit",
  storageBucket: "carejoa-motionbit.appspot.com",
  messagingSenderId: "752483696215",
  appId: "1:752483696215:web:c644e45306ce147f73ed12",
  measurementId: "G-VHEB9BPRJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
