// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAo8OrETsfSAx_XTyXQ2oXH4rn_nYNtw4s',
  authDomain: 'netflix-clone-ebdec.firebaseapp.com',
  projectId: 'netflix-clone-ebdec',
  storageBucket: 'netflix-clone-ebdec.appspot.com',
  messagingSenderId: '1052565968043',
  appId: '1:1052565968043:web:cd9f517621454dd23b13ee',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
