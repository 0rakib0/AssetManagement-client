// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IoyJZXqJx7piWoUnEVcI5IagnioGNZc",
  authDomain: "assetmanagement-9210d.firebaseapp.com",
  projectId: "assetmanagement-9210d",
  storageBucket: "assetmanagement-9210d.appspot.com",
  messagingSenderId: "1072327223942",
  appId: "1:1072327223942:web:3c895c4e61d3d9bdbb7f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;