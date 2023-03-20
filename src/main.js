import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDeircbxuVExvgz4umqeziz4iupbiGZ-E",
  authDomain: "vec-interactive.firebaseapp.com",
  projectId: "vec-interactive",
  storageBucket: "vec-interactive.appspot.com",
  messagingSenderId: "931092852993",
  appId: "1:931092852993:web:d6998f84333125f419eb00",
  measurementId: "G-P5PWZPDDEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')
