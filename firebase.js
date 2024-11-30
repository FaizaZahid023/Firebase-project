 // firebase.js
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification,GoogleAuthProvider,signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 
 
 // Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB9nwncDAxsZxKx-pRql1K1oJqb4tdbRP8",
   authDomain: "quiz-fa8a9.firebaseapp.com",
   projectId: "quiz-fa8a9",
   storageBucket: "quiz-fa8a9.appspot.com",
   messagingSenderId: "642806587857",
   appId: "1:642806587857:web:ada85b2fef0c4269c840f0",
   measurementId: "G-QS2LMM1WJG",
   
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();

 
 export { auth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification,GoogleAuthProvider,googleProvider,signInWithPopup, signOut } 