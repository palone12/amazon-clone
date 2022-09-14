import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdDsGTd1hZ235jfUjjjMCKbguW4hxKNRA",
  authDomain: "clone-c193c.firebaseapp.com",
  projectId: "clone-c193c",
  storageBucket: "clone-c193c.appspot.com",
  messagingSenderId: "52163964534",
  appId: "1:52163964534:web:3e225968b81034a4657957",
  measurementId: "G-X2GF3V60V9",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
export { db, auth };
