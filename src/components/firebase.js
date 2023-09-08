// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpXb8cIdpnOVnh6msK3fRp6mPn4Q-GNs",
  authDomain: "task-management-59155.firebaseapp.com",
  projectId: "task-management-59155",
  storageBucket: "task-management-59155.appspot.com",
  messagingSenderId: "832661025579",
  appId: "1:832661025579:web:068af9349a73b7a1440b6e",
  measurementId: "G-BYZ62P8RF9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default firebase;