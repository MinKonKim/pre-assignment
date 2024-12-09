// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd_Hma696ZB-CjDvJRFNOeXrVWMMp6HCw",
  authDomain: "pre-assignmne.firebaseapp.com",
  projectId: "pre-assignmne",
  storageBucket: "pre-assignmne.firebasestorage.app",
  messagingSenderId: "807700956318",
  appId: "1:807700956318:web:4ede428c915801f61a678f",
  measurementId: "G-HKSYZL97RJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
