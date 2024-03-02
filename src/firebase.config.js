// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnIardiHwjKQX9doq0A69iFL7nPxzr5v4",
  authDomain: "rest-countries-797f7.firebaseapp.com",
  projectId: "rest-countries-797f7",
  storageBucket: "rest-countries-797f7.appspot.com",
  messagingSenderId: "1014637292090",
  appId: "1:1014637292090:web:f5a1d323bda725d55a6303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;