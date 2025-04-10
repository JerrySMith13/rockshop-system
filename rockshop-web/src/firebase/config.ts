// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJCS3xM3gnDVE8gZ3Br_VhMjg0DRAKv0Q",
  authDomain: "rockshop-sys.firebaseapp.com",
  projectId: "rockshop-sys",
  storageBucket: "rockshop-sys.firebasestorage.app",
  messagingSenderId: "216538489429",
  appId: "1:216538489429:web:50ccdefed4359de7f96adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
