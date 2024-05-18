// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-1d197.firebaseapp.com",
  projectId: "real-estate-1d197",
  storageBucket: "real-estate-1d197.appspot.com",
  messagingSenderId: "359597504589",
  appId: "1:359597504589:web:311f90ce7b358d00b04404"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);