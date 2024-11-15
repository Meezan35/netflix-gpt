// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA21qqE5FNaDmYHq-5O9QsrXY74QU-7jtw",
  authDomain: "netflixgpt-432df.firebaseapp.com",
  projectId: "netflixgpt-432df",
  storageBucket: "netflixgpt-432df.firebasestorage.app",
  messagingSenderId: "791700109295",
  appId: "1:791700109295:web:7b839cc6e01ec3f55e681a",
  measurementId: "G-M2M8SHBZK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();