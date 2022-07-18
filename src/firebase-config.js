import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYm7UxtIdn-N5AziEmb4oV2Y1_bmhTKfo",
  authDomain: "hydrowhales.firebaseapp.com",
  projectId: "hydrowhales",
  storageBucket: "hydrowhales.appspot.com",
  messagingSenderId: "807441334368",
  appId: "1:807441334368:web:c59821810663a3203d0305",
  measurementId: "G-PSY91HP730",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
