const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const accountContainer = document.getElementById("account-container");

signUpButton.addEventListener("click", () => {
  accountContainer.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  accountContainer.classList.remove("right-panel-active");
});

const accountContainerMobile = document.querySelector(
    ".account-container-mobile"
 ),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    accountContainerMobile.classList.toggle("show-signup");
  });
});

// Account Local Storage

function createAccount() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if email or password is empty


  // Check if an account with the same email already exists
  if (sessionStorage.getItem(email)) {
    alert("An account with the email '" + email + "' already exists.");
    return;
  }

  // Create a new account object
  var account = {
    email: email,
    password: password,
  };

  // Store the account object in the local storage
  sessionStorage.setItem(email, JSON.stringify(account));

  alert("Account created successfully!");
}

//  Login
function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var password = document.getElementById("confirmPassword").value;


	// Check if email or password is empty
	if (!email || !password || !confirmPassword) {
	  alert("Please enter a valid email and password.");
	  return;
	}

	// Retrieve the account from local storage
	var account = sessionStorage.getItem(email);

	// Check if the account exists and the password matches
	if (account) {
	  account = JSON.parse(account);

	  if (password === account.password) {
		window.location.href = "dashboard.html";
		return;
	  }
	}

	// If the account doesn't exist or password doesn't match
	alert("Invalid email or password.");

	// Set the email as the content of the h1 element
	var welcomeHeading = document.getElementById("welcomeHeading");
	welcomeHeading.textContent = "Welcome, " + email + "!";
}


// Show error messages for invalid email and password
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

emailInput.addEventListener("input", function() {
  emailError.style.display = emailInput.validity.valid ? "none" : "block";
});

passwordInput.addEventListener("input", function() {
  passwordError.style.display = passwordInput.validity.valid ? "none" : "block";
});