// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzd2SReGdwdPSjBM8SdbROIsKhDZejjuQ",
  authDomain: "lecturer-system.firebaseapp.com",
  projectId: "lecturer-system",
  storageBucket: "lecturer-system.firebasestorage.app",
  messagingSenderId: "673614009814",
  appId: "1:673614009814:web:c036d063a5c1a2f76e4077",
  measurementId: "G-DKHFLL0N6W"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
