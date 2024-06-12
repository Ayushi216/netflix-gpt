// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuJ56dESun3oMLsORqnYhuDm1J8Glat1U",
  authDomain: "netflixgpt-36ff5.firebaseapp.com",
  projectId: "netflixgpt-36ff5",
  storageBucket: "netflixgpt-36ff5.appspot.com",
  messagingSenderId: "124290992042",
  appId: "1:124290992042:web:86bc0ef297e8a328620dd3",
  measurementId: "G-C5QBRZXYTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();