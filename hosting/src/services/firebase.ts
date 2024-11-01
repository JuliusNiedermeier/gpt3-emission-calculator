import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBM4UZRQ_JAMEhdnws-_zCHeb8A8sWxz9s",
  authDomain: "greenhouse-ai.firebaseapp.com",
  projectId: "greenhouse-ai",
  storageBucket: "greenhouse-ai.appspot.com",
  messagingSenderId: "774360331809",
  appId: "1:774360331809:web:561dd5261a6ef9c6d0d560",
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);
