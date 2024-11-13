// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqq-UuEF4OzZt5W_P58XChFQt6WCxBY70",
  authDomain: "mtachessdatabase.firebaseapp.com",
  projectId: "mtachessdatabase",
  storageBucket: "mtachessdatabase.firebasestorage.app",
  messagingSenderId: "938556756849",
  appId: "1:938556756849:web:9c9a7c7ee0636784aa9cd0",
  measurementId: "G-NGEVF1PW5X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
