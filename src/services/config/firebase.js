
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0O8z9Io9muNIcMebNf8KPWiMDEoQhyOE",
  authDomain: "coderreact-73695.firebaseapp.com",
  projectId: "coderreact-73695",
  storageBucket: "coderreact-73695.firebasestorage.app",
  messagingSenderId: "301177426812",
  appId: "1:301177426812:web:b65859caa4b51216258af9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();