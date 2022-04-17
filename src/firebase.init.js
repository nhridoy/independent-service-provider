// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaUdvaH8aqtlXvf-tDqHbp7qfO0lJU9JY",
  authDomain: "elegant-photographer.firebaseapp.com",
  projectId: "elegant-photographer",
  storageBucket: "elegant-photographer.appspot.com",
  messagingSenderId: "1062096932132",
  appId: "1:1062096932132:web:a6300ade93fb66f93a37b1",
  measurementId: "G-ZVW25LB6VY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
