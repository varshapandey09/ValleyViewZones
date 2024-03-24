// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-11feb.firebaseapp.com",
  projectId: "mern-estate-11feb",
  storageBucket: "mern-estate-11feb.appspot.com",
  messagingSenderId: "534293640884",
  appId: "1:534293640884:web:e71049f29b233ce997c9e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);