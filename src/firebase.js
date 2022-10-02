/** @format */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore' // DO NOT FORGET TO SET W&R to True


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ0cAqaRJePYc5v7DsHBoW3ur4DbKA-gw",
  authDomain: "spacetime-f2491.firebaseapp.com",
  projectId: "spacetime-f2491",
  storageBucket: "spacetime-f2491.appspot.com",
  messagingSenderId: "894537608591",
  appId: "1:894537608591:web:171887ce33932d18d9effa"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
