import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqFJS64OKlxmdfw2KlybJpLD-tLuniVb4",
  authDomain: "twitter-d0844.firebaseapp.com",
  projectId: "twitter-d0844",
  storageBucket: "twitter-d0844.appspot.com",
  messagingSenderId: "143106769696",
  appId: "1:143106769696:web:95cbcb2b59aeb2e5098d45",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
