import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDr6GxWhf0iUSrJvc4z6j_g_g49OHKDPaE",
  authDomain: "spalette-ea057.firebaseapp.com",
  databaseURL:
    "https://spalette-ea057-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spalette-ea057",
  storageBucket: "spalette-ea057.appspot.com",
  messagingSenderId: "972163355149",
  appId: "1:972163355149:web:e3a9055c621d860ec63b44",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
