// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgXzPo4d-K3LRiw26RWfxNHTMMXlwbPxY",
  authDomain: "auth-fe7d2.firebaseapp.com",
  projectId: "auth-fe7d2",
  storageBucket: "auth-fe7d2.appspot.com", // düzəldildi
  messagingSenderId: "101187055715",
  appId: "1:101187055715:web:6c32c4e344a1b15bee4856",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
