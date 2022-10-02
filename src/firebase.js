/** @format */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore' // DO NOT FORGET TO SET W&R to True


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUO4KDE-KXknAN0v1hMKKmAi-m4ZWZARY",
  authDomain: "spacetime-e4607.firebaseapp.com",
  projectId: "spacetime-e4607",
  storageBucket: "spacetime-e4607.appspot.com",
  messagingSenderId: "47653330258",
  appId: "1:47653330258:web:c2b8917831cb4a8af2ee8b",
  measurementId: "G-1KLWWZHEKP"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
