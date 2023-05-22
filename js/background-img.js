// Navbar
const navEL = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

// Parallax Effect
let headerShowcase = document.querySelector("#header-showcase");
let fgImg1 = document.querySelector("#fg1-img");
let fgImg2 = document.querySelector("#fg2-img");
let fgImg3 = document.querySelector("#fg3-img");

window.addEventListener("scroll", function () {
  // Navbar
  if (lastScrollY < window.scrollY) {
    navEL.classList.add("navbar--hidden");
  } else {
    navEL.classList.remove("navbar--hidden");
  }
  lastScrollY = window.scrollY;

  // Parallax Effect
  let value = window.scrollY;
  headerShowcase.style.marginTop = value * 1.2 + "px";
  fgImg1.style.marginTop = value * 0.4 + "px";
  fgImg2.style.marginTop = value * 0.8 + "px";
  fgImg3.style.marginLeft = value * 0.8 + "px";
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

// Disapear Btn
let btnLetBegin = document.querySelector(".btn-let-begin");
document.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnLetBegin.style.visibility = "visible";
  } else {
    btnLetBegin.style.visibility = "hidden";
  }
});

// Reveal Section
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 40;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Cookie
console.clear();
"use strict";

(function () {
  var offcanvas = document.getElementById("offcanvas");
  
  if (!sessionStorage.getItem("offcanvasShown")) {
    var bs_offcanvas = new bootstrap.Offcanvas(offcanvas);
    bs_offcanvas.show();
    
    sessionStorage.setItem("offcanvasShown", true);
  }
})();

