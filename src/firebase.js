// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,  // <-- use full config from Firebase
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJID,
  storageBucket: process.env.REACT_SBUCKET,
  messagingSenderId: process.env.REACT_MSGSENDERID,
  appId: process.env.REACT_APPID,
  measurementId: process.env.REACT_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
