// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2FlH0S0E8uoQdLdzEK52sODCNX1UXau0",
  authDomain: "assignment-09-794ae.firebaseapp.com",
  projectId: "assignment-09-794ae",
  storageBucket: "assignment-09-794ae.appspot.com",
  messagingSenderId: "922269190492",
  appId: "1:922269190492:web:20a4b01984b7ae218c5999",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
