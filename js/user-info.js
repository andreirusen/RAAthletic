// Local Email Storage
// Retrieve the stored accounts from local storage
const loggedUsername = document.getElementById("loggedUsername");
const loggedAccount = localStorage.getItem("accounts");
const parsedAccount = JSON.parse(loggedAccount);

// Access the properties of the first account object in the array
// Check if a user is logged in
if (parsedAccount && parsedAccount.length > 0) {
  const userAccount = parsedAccount[0];
  const username = userAccount.username;

  loggedUsername.textContent = username;
} else {
  loggedUsername.textContent = "ACCOUNT";
}



// if (loggedAccount) {
//   loggedUsername.textContent = username;
// } else {
//   loggedUsername.textContent = "LOGIN";
// }





// Function to show or hide the login status based on the user's login status
function toggleLoginStatus() {
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const loggedInEmailSpan = document.getElementById("loggedInEmail");
  const logoutBtn = document.getElementById("logout-btn");

  if (loggedInEmail) {
    // User is logged in
    loggedInEmailSpan.textContent = loggedInEmail;
    loggedInEmailSpan.style.display = "inline"; // Show the email
    logoutBtn.style.display = "inline"; // Show the logout button
  } else {
    // User is not logged in
    loggedInEmailSpan.style.display = "none"; // Hide the email
    logoutBtn.style.display = "none"; // Hide the logout button
  }
}

// Function to handle logout
function handleLogout() {
  localStorage.removeItem("loggedInEmail");
  window.location.href = "index.html"; // Redirect to the homepage or any desired page
}

// Function to set up event listeners for login and signup buttons
function setupEventListeners() {
  document.getElementById("logout-btn").addEventListener("click", handleLogout);
}

// Pre-fill the email field with remembered email, if available
window.addEventListener("DOMContentLoaded", () => {
  toggleLoginStatus(); // Show or hide the login status based on the user's login status
});

// Initial setup of event listeners
setupEventListeners();


