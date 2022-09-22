import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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