import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyArvYevmnLiicXR-Ouc7AFKeK3yv_5TCrc",
  authDomain: "store-aeba7.firebaseapp.com",
  projectId: "store-aeba7",
  storageBucket: "store-aeba7.firebasestorage.app",
  messagingSenderId: "851870522934",
  appId: "1:851870522934:web:1a325ddaab93f23c214297",
  measurementId: "G-MX9FBR98F5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = analytics;
