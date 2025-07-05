// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4S6QCn6AyaEbmfA8RU-3cp9wNlO1BR48",
  authDomain: "procedureprobecard.firebaseapp.com",
  projectId: "procedureprobecard",
  storageBucket: "procedureprobecard.firebasestorage.app",
  messagingSenderId: "357032599082",
  appId: "1:357032599082:web:1b7fe1abb30bb4208aed53",
  measurementId: "G-XS5B07FRTM"
};
console.log("🔥 Firebase projectId:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Get email and password values after clicking the submit button
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Email and password cannot be empty");
        return;
    }

    // Check if the email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Creating Account.....");
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
