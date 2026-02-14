import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";

// إعدادات مشروع فايربيز (Firebase Configuration)
// يجب استبدال القيم التالية ببيانات مشروعك الحقيقية من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCzd2SReGdwdPSjBM8SdbROIsKhDZejjuQ",
  authDomain: "lecturer-system.firebaseapp.com",
  projectId: "lecturer-system",
  storageBucket: "lecturer-system.firebasestorage.app",
  messagingSenderId: "673614009814",
  appId: "1:673614009814:web:c036d063a5c1a2f76e4077",
  measurementId: "G-DKHFLL0N6W"
};

// تهيئة تطبيق فايربيز (Initialize Firebase)
const app = initializeApp(firebaseConfig);

// تصدير الخدمات لاستخدامها في باقي الملفات
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/* تذكير هام: 
بعد وضع الـ API Key الخاص بك، تأكد من تفعيل:
1. Authentication (Email/Password).
2. Firestore Database (في وضع الإنتاج أو الاختبار).
3. Firebase Storage (لحفظ صور الطلاب).
*/