import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDLLrKsmtQgDAva5RaBND-02yXnwtdJqQ4",
  authDomain: "unichat-5ecf6.firebaseapp.com",
  projectId: "unichat-5ecf6",
  storageBucket: "unichat-5ecf6.appspot.com",
  messagingSenderId: "424483255516",
  appId: "1:424483255516:web:8b49881805575e289f3019"
}).auth();