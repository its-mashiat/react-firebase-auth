import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDPyhG7CplruGQqRJdmucWZvN4O-pH8WA",
  authDomain: "react-auth-app-13a5b.firebaseapp.com",
  projectId: "react-auth-app-13a5b",
  storageBucket: "react-auth-app-13a5b.firebasestorage.app",
  messagingSenderId: "512605567673",
  appId: "1:512605567673:web:c62fbd3adce11262183968",
  measurementId: "G-CNF11VD4XF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);