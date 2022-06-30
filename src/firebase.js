// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS31mhl-eK8Dh1yxwyjP2Mu9t-v3s-4HM",
  authDomain: "netflix-react-da359.firebaseapp.com",
  projectId: "netflix-react-da359",
  storageBucket: "netflix-react-da359.appspot.com",
  messagingSenderId: "961330421431",
  appId: "1:961330421431:web:362514dfacfa9fcf69f732",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
