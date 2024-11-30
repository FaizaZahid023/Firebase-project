import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider,googleProvider,signInWithPopup, signOut } from "./firebase.js"

let signUp = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cPassword = document.getElementById("cpassword").value;
  
    // Regex for email and password validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    // Email validation check
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Password validation check
    if (!passwordRegex.test(password)) {
      alert("Invalid password. It must contain at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }
  
    // Confirm password match check
    if (password !== cPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
let sign_up = document.getElementById("sign_up")
sign_up.addEventListener("click",signUp)

let signIn=()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    console.log(error.code); 
  });
}
let sign_in = document.getElementById("sign_in")
sign_in.addEventListener("click",signIn)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    // window.location.href = "./dashboard.html"
  } else {
  console.log("User not found")
  }
});
let signout = ()=>{
  signOut(auth).then(() => {
    console.log("Sign-out successful.");
    
  }).catch((error) => {
    console.log(error)
  });
}
let sign_out = document.getElementById("sign_out")
sign_out.addEventListener("click",signout)


let google=()=>{

  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    
      
      
      // The signed-in user info.
      const user = result.user;
      console.log(token);
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential =GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      
      // ...
    });
}
let googleBtn = document.getElementById("google");
googleBtn.addEventListener("click",google)


