// Login Form Switch
// Switch between signUp and Login
const signInBtnLink = document.querySelector(".logInBtn-link");
const signUpBtnLink = document.querySelector(".signUpBtn-link");
const wrapperLogin = document.querySelector(".wrapper-account");

// Function to toggle between signup and login sections
function toggleSections() {
  wrapperLogin.classList.toggle("active");
  setupEventListeners(); // Re-attach event listeners after section switch
}

// SignUp Link
signUpBtnLink.addEventListener("click", toggleSections);

// Login Link
signInBtnLink.addEventListener("click", toggleSections);

// Function to handle login
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission and page reload

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

  if (!account) {
    showErrorMessage(loginError, "Account does not exist.");
    return;
  }

  if (account.password !== password) {
    showErrorMessage(loginError, "Incorrect password.");
    return;
  }

  // Remember the email if the checkbox is checked
  if (rememberCheckbox.checked) {
    localStorage.setItem("rememberedEmail", email);
  } else {
    localStorage.removeItem("rememberedEmail");
  }

  // Redirect to the dashboard page
  window.location.href = "dashboard.html";
}

// Function to handle sign up
function handleSignUp(event) {
  event.preventDefault(); // Prevent form submission and page reload

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
    repeatPassword: repeatPassword,
  };

  accounts.push(newAccount);
  localStorage.setItem("accounts", JSON.stringify(accounts));

  // Redirect to the dashboard page (or any other desired page)
  window.location.href = "dashboard.html";
}

// Function to display error messages
function showErrorMessage(element, message) {
  element.classList.remove("success");
  element.classList.add("error");
  element.innerText = message;
}

// Function to display success messages
function showSuccessMessage(element, message) {
  element.classList.remove("error");
  element.classList.add("success");
  element.innerText = message;
}

// Function to clear error messages
function clearErrorMessage(element) {
  element.innerText = "";
}

// Check if the email is valid
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to set up event listeners for login and signup buttons
function setupEventListeners() {
  document.getElementById("login-btn").addEventListener("click", handleLogin);
  document.getElementById("signup-btn").addEventListener("click", handleSignUp);
}

// Pre-fill the email field with remembered email, if available
window.addEventListener("DOMContentLoaded", () => {
  const rememberedEmail = localStorage.getItem("rememberedEmail");
  if (rememberedEmail) {
    document.getElementById("login-email").value = rememberedEmail;
  }
});

// Initial setup of event listeners
setupEventListeners();
