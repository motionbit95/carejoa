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
  apiKey: "AIzaSyAQtPHHQ3tXi_pnz11DfC_mS-jlVDTBpe0",
  authDomain: "test-firebase-951b8.firebaseapp.com",
  projectId: "test-firebase-951b8",
  storageBucket: "test-firebase-951b8.appspot.com",
  messagingSenderId: "313059048846",
  appId: "1:313059048846:web:cfca93edc611edd874b8df",
  measurementId: "G-NK3214B47P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
