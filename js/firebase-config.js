// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqGf0Wgfacqm8Ih1m44fksHFE2WMhLERk",
  authDomain: "lecturer-system-29a75.firebaseapp.com",
  projectId: "lecturer-system-29a75",
  storageBucket: "lecturer-system-29a75.firebasestorage.app",
  messagingSenderId: "732976293382",
  appId: "1:732976293382:web:3508a4b2b17d7867f8c587",
  measurementId: "G-73RKLLNQGH"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
