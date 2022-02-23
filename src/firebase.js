// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDzG7rP_fWBqnuIwyQWJ2YWlIjkcn-2S-k",

  authDomain: "reat-fb-auth.firebaseapp.com",

  projectId: "reat-fb-auth",

  storageBucket: "reat-fb-auth.appspot.com",

  messagingSenderId: "971835335249",

  appId: "1:971835335249:web:02fb97e164acf297ae8e70"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)