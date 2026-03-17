// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDb0HTWfzkZEUACkaUaaJf8W9Lp1eoBU",
  authDomain: "hrms-dashboard-a3437.firebaseapp.com",
  projectId: "hrms-dashboard-a3437",
  storageBucket: "hrms-dashboard-a3437.firebasestorage.app",
  messagingSenderId: "1089032398595",
  appId: "1:1089032398595:web:b33876c1059a4b0b2ceb36",
  measurementId: "G-9GETHPXQ8L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);