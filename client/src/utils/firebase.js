// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: 'AIzaSyB6IzH8Oj3_5tDSJBBI02ySBGa9ViD3Km4',
  authDomain: 'quotable-9881c.firebaseapp.com',
  projectId: 'quotable-9881c',
  storageBucket: 'quotable-9881c.appspot.com',
  messagingSenderId: '370877927432',
  appId: '1:370877927432:web:ce8c0c730e452d003e41bd',
  measurementId: 'G-2GK371NW2W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);

export { db, collection, addDoc };
