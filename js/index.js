let headerWelcome = document.querySelector(".header-welcome");
let headerTyped = document.querySelector(".header-typed");
let btnHome = document.querySelector(".btn-home");

let fgImg1 = document.querySelector(".fg1-showcase-img");
let fgImg3 = document.querySelector(".fg3-showcase-img");
// let fgImg4 = document.querySelector(".fg4-showcase-img");
// let fgImg5 = document.querySelector(".fg5-showcase-img");

let contentSection = document.querySelector(".content-section");

// Parallax Effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  headerWelcome.style.marginBottom = value * 1 + "px";
  headerTyped.style.marginBottom = value * 1 + "px";
  btnHome.style.marginTop = value * 0 + "px";

  fgImg1.style.marginTop = value * 0.3 + "px";
  fgImg3.style.marginLeft = value * 0.3 + "px";

  // fgImg4.style.marginRight = value * 2 + "px";
  // fgImg5.style.marginLeft = value * 3 + "px";
});











//Typing Section
var typed = new Typed("#typed-strings", {
  strings: ["Start exercising today!", "No more excuses!", "You are ready!"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});



// Disappear of text
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 0) {
    headerTyped.style.visibility = "hidden";
  } else {
    headerTyped.style.visibility = "visible";
  }
});



// Button Let Begin - Right
let btnLetBegin = document.querySelector(".btn-let-begin");
document.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnLetBegin.style.visibility = "visible";
  } else {
    btnLetBegin.style.visibility = "hidden";
  }
});
//Dissapear of Btn
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 500) {
    headerTyped.style.visibility = "hidden";
  } else {
    headerTyped.style.visibility = "visible";
  }
});



// Button To Top - Right
let btnToTop = document.querySelector(".btn-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Scroll To Section
function scrollToContent() {
  contentSection.scrollIntoView({ behavior: "smooth" });
}









const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

let loginForm = document.getElementById("form-element");
loginForm.style.display = "none"

document.getElementById("login").addEventListener("click", function() {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    loginForm.style.posiiton = "fixed";
    loginForm.style.width = "100%"
    loginForm.style.height = "100%"
    loginForm.style.backgroundColor = "rgba(20, 20, 20, 0.8)"
    loginForm.style.zIndex = "9999"
  } else {
    loginForm.style.display = "none";
  }
});

$('.login-btn').on('click', function () {
  $('#login').fadeIn(400);
  $('#form-element').fadeIn(400);
});

$('.login-close-btn').on('click', function () {
  $('#form-element').fadeOut(400);
});