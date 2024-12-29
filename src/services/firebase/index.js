// services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9JuVSQoEeyyKHqriZg0JXFiXu2xtlDJk",
  authDomain: "temauno-camacho.firebaseapp.com",
  projectId: "temauno-camacho",
  storageBucket: "temauno-camacho.appspot.com",
  messagingSenderId: "749320380471",
  appId: "1:749320380471:web:fac654f9b55243e3bf1fb2",
  measurementId: "G-R0LT2ZFYTE",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);
