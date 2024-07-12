// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzpuX_VKauysLMs9epwNoIBbtUvA0ZQGk",
  authDomain: "fairebase-1628f.firebaseapp.com",
  projectId: "fairebase-1628f",
  storageBucket: "fairebase-1628f.appspot.com",
  messagingSenderId: "956235371968",
  appId: "1:956235371968:web:6359e78a11c2ede9f52425",
  measurementId: "G-4GWHD1VNDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
