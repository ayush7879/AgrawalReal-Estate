// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5c46b.firebaseapp.com",
  projectId: "real-estate-5c46b",
  storageBucket: "real-estate-5c46b.appspot.com",
  messagingSenderId: "187640195189",
  appId: "1:187640195189:web:0b70ed4d0573334435f03c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);