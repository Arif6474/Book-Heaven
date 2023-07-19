/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwpMNT-l2vZVf1_PM5PJyUUEYTWnuPGhw",
  authDomain: "book-heaven-bc3ff.firebaseapp.com",
  projectId: "book-heaven-bc3ff",
  storageBucket: "book-heaven-bc3ff.appspot.com",
  messagingSenderId: "825818907535",
  appId: "1:825818907535:web:2797c495a570988ab381fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
