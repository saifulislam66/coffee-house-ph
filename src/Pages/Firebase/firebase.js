// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE4hATPQm0tsII07KRR9zROjN5h0DGF2g",
  authDomain: "coffee-auth-1fd39.firebaseapp.com",
  projectId: "coffee-auth-1fd39",
  storageBucket: "coffee-auth-1fd39.firebasestorage.app",
  messagingSenderId: "402913851071",
  appId: "1:402913851071:web:d22cba1cbf1d65bcbd780a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
