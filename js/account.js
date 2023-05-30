// Eye Password
const eyeShowHide = document.querySelectorAll(".eye-icon");

eyeShowHide.forEach((eyeIcon) => {
  const passwordField = eyeIcon.previousElementSibling;

  function passwordLength() {
    const passwordValue = passwordField.value;
    if (passwordValue.length === 0) {
      eyeIcon.style.display = "none";
    } else {
      eyeIcon.style.display = "block";
    }
  }

  // Trigger passwordLength function on input event
  passwordField.addEventListener("input", passwordLength);

  // Eye Switcher
  eyeIcon.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
      passwordField.type = "password";
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
  });

  // Initial check for password visibility on page load
  passwordLength();
});

// Login Form Switch Switch between signUp and Login
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
