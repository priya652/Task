// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KjhDJql8gNZfp7u7n9eG0u5qLxplXvg",
  authDomain: "authentication-ef87c.firebaseapp.com",
  projectId: "authentication-ef87c",
  storageBucket: "authentication-ef87c.firebasestorage.app",
  messagingSenderId: "616374662966",
  appId: "1:616374662966:web:544d4fb14defc73a37a597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export {auth};