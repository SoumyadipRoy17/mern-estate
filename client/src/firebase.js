// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-31d37.firebaseapp.com",
  projectId: "mern-estate-31d37",
  storageBucket: "mern-estate-31d37.appspot.com",
  messagingSenderId: "745735245077",
  appId: "1:745735245077:web:7caad4bfff480bb2a5ad1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
