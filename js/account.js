const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const accountContainer = document.getElementById('account-container');

signUpButton.addEventListener('click', () => {
	accountContainer.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	accountContainer.classList.remove("right-panel-active");
});


const accountContainerMobile = document.querySelector(".account-container-mobile"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
	  if(password.type === "password"){
		  password.type = "text";
		  eyeIcon.classList.replace("bx-hide", "bx-show");
		  return;
	  }
	  password.type = "password";
	  eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})     
 
links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 accountContainerMobile.classList.toggle("show-signup");
})
})