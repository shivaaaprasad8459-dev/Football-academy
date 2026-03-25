// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyBHNu6DLAJysAwKVTxACSIZvQQ9g_bSOrU",
  authDomain: "football-academy-85b34.firebaseapp.com",
  projectId: "football-academy-85b34",
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("userInfo").innerText = "Logged in as: " + user.email;
    document.getElementById("formSection").style.display = "block";
  } else {
    document.getElementById("userInfo").innerText = "Not logged in";
    document.getElementById("formSection").style.display = "none";
  }
});

// SIGNUP
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => alert("Account created!"))
    .catch(err => alert(err.message));
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in!"))
    .catch(err => alert(err.message));
}

// LOGOUT
function logout() {
  firebase.auth().signOut()
    .then(() => alert("Logged out!"));
}