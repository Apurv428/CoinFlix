import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVKEZ3sn-RCqAJJxIktKJImPICkx-7r_0",
  authDomain: "coinflix-f86df.firebaseapp.com",
  projectId: "coinflix-f86df",
  storageBucket: "coinflix-f86df.appspot.com",
  messagingSenderId: "194739376010",
  appId: "1:194739376010:web:280f75e6e67bc693650273",
  measurementId: "G-GDRVX4LZGJ"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };