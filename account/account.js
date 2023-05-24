// Login Form
const signInBtnLink = document.querySelector(".logInBtn-link");
const signUpBtnLink = document.querySelector(".signUpBtn-link");
const wrapperLogin = document.querySelector(".wrapper-account");

// SignUp Link
signUpBtnLink.addEventListener("click", () => {
  wrapperLogin.classList.toggle("active");
});
// Login Link
signInBtnLink.addEventListener("click", () => {
  wrapperLogin.classList.toggle("active");
});

// Add event listeners to the login and sign up buttons
document.getElementById("login-btn").addEventListener("click", handleLogin);
document.getElementById("signup-btn").addEventListener("click", handleSignUp);
// Check if the email is valid
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check if the password meets the requirements
function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
    password
  );
}

// Function to display error messages
function showErrorMessage(element, message) {
  element.innerText = message;
}

// Function to clear error messages
function clearErrorMessage(element) {
  element.innerText = "";
}

// Function to handle login
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const loginError = document.getElementById("login-error");
  const rememberCheckbox = document.getElementById("remember-checkbox");

  clearErrorMessage(loginError);

  if (!isValidEmail(email)) {
    showErrorMessage(loginError, "Invalid email format.");
    return;
  }

  if (password.length < 6) {
    showErrorMessage(loginError, "Password must be at least 6 characters.");
    return;
  }

  // Check if the account exists in local storage
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const account = accounts.find((acc) => acc.email === email);

  if (account) {
    if (account.password === password) {
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";

      // Remember the email if the checkbox is checked
      if (rememberCheckbox.checked) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    } else {
      showErrorMessage(loginError, "Incorrect password.");
    }
  } else {
    showErrorMessage(loginError, "Account does not exist.");
  }
}

// Pre-fill the email field with remembered email, if available
window.addEventListener("DOMContentLoaded", () => {
  const rememberedEmail = localStorage.getItem("rememberedEmail");
  if (rememberedEmail) {
    document.getElementById("login-email").value = rememberedEmail;
  }
});

// Function to handle sign up
function handleSignUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const repeatPassword = document.getElementById(
    "signup-repeat-password"
  ).value;
  const signupError = document.getElementById("signup-error");

  clearErrorMessage(signupError);

  if (!isValidEmail(email)) {
    showErrorMessage(signupError, "Invalid email format.");
    return;
  }

  if (password.length < 6) {
    showErrorMessage(signupError, "Password must be at least 6 characters.");
    return;
  }

  if (password !== repeatPassword) {
    showErrorMessage(signupError, "Passwords do not match.");
    return;
  }

  // Check if the account already exists in local storage
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const existingAccount = accounts.find((acc) => acc.email === email);

  if (existingAccount) {
    showErrorMessage(signupError, "Account already exists.");
    return;
  }

  // Create a new account and save it to local storage
  const newAccount = {
    email: email,
    password: password,
  };

  accounts.push(newAccount);
  localStorage.setItem("accounts", JSON.stringify(accounts));

  // Redirect to the dashboard page
  window.location.href = "dashboard.html";
}
