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

// TRIAL FORM SUBMIT
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trialForm");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            alert("Form submitted");

            const data = {
                name: document.querySelector('input[name="name"]').value,
                email: document.querySelector('input[name="email"]').value
            };

            try {
                const response = await fetch("https://2a05bc4c-aa29-4f87-a50a-f64aee66c885-00-2vdnq7uh50td4.pike.replit.dev/add-player", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                alert(result.message);
            } catch (error) {
                console.error(error);
                alert("Error submitting form");
            }
        });
    }
});