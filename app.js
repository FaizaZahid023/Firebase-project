import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js"

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