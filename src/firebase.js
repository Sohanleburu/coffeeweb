// src/firebase.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5Db8fXpwNRB0bZPd-pYwRO_bBAl4zuKU",  // <-- use full config from Firebase
  authDomain: "coffeeweb-b37db.firebaseapp.com",
  projectId: "coffeeweb-b37db",
  storageBucket: "coffeeweb-b37db.firebasestorage.app",
  messagingSenderId: "942924640189",
  appId: "1:942924640189:web:996bd229121d06b9c8acd4",
  measurementId: "G-GGRC8707D9"
};

const app = initializeApp(firebaseConfig);

export default app;
