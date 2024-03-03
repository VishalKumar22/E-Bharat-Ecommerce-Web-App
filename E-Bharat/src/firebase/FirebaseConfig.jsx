// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC48lOXCIbkQodYKej6ZB4wFIOO560FhD8",
  authDomain: "e-bharat-b21c6.firebaseapp.com",
  projectId: "e-bharat-b21c6",
  storageBucket: "e-bharat-b21c6.appspot.com",
  messagingSenderId: "567976418765",
  appId: "1:567976418765:web:b566022a5d258dd761f884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

const auth = getAuth(app)

export {auth, fireDB}