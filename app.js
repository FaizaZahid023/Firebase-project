import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let cPassword = document.getElementById("confirm_pass").value;

    // Regex for email and password validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    // Email validation check
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation check
    if (!passwordRegex.test(password.value)) {
        alert("Invalid password. It must contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    // Confirm password match check
    if (password.value !== cPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create new user
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
        
};
let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let cPassword = document.getElementById("confirm_pass").value;

    // Regex for email and password validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    // Email validation check
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation check
    if (!passwordRegex.test(password.value)) {
        alert("Invalid password. It must contain at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    // Confirm password match check
    if (password.value !== cPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create new user
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
};

// Add event listener for signup
if (window.location.pathname == "/loginSignup/login.html") {
    let logIn = document.getElementById("login_btn");
    logIn.addEventListener("click", login);
  }
let logIn = document.getElementById("login")
logIn.addEventListener("click",login)

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);
