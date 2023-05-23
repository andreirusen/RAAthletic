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

// Desktop
// Account local storage - Add event listeners to the login and sign up buttons
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
    } else {
      showErrorMessage(loginError, "Incorrect password.");
    }
  } else {
    showErrorMessage(loginError, "Account does not exist.");
  }
}
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

// Mobile
// Account local storage - Add event listeners to the login and sign up buttons
document
  .getElementById("mobile-login-btn").addEventListener("click", handleMobileLogin);
document
  .getElementById("mobile-signup-btn").addEventListener("click", handleMobileSignUp);

// Check if the email is valid
function isValidEmailMobile(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check if the password meets the requirements
function isValidPasswordMobile(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
    password
  );
}

// Function to display error messages
function showErrorMessageMobile(element, message) {
  element.innerText = message;
}

// Function to clear error messages
function clearErrorMessageMobile(element) {
  element.innerText = "";
}

// Function to handle login
function handleMobileLoginMobile() {
  const email = document.getElementById("mobile-login-email").value;
  const password = document.getElementById("mobile-login-password").value;
  const loginError = document.getElementById("mobile-login-error");

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
  const accounts = JSON.parse(localStorage.getItem("mobile-accounts")) || [];
  const account = accounts.find((acc) => acc.email === email);

  if (account) {
    if (account.password === password) {
      // Redirect to the dashboard page
      window.location.href = "mobile-dashboard.html";
    } else {
      showErrorMessage(loginError, "Incorrect password.");
    }
  } else {
    showErrorMessage(loginError, "Account does not exist.");
  }
}

// Function to handle sign up
function handleMobileSignUpMobile() {
  const email = document.getElementById("mobile-signup-email").value;
  const password = document.getElementById("mobile-signup-password").value;
  const repeatPassword = document.getElementById(
    "mobile-signup-repeat-password"
  ).value;
  const signupError = document.getElementById("mobile-signup-error");

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
  const accounts = JSON.parse(localStorage.getItem("mobile-accounts")) || [];
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
  localStorage.setItem("mobile-accounts", JSON.stringify(accounts));

  // Redirect to the dashboard page
  window.location.href = "mobile-dashboard.html";
}





