let headerPrograms = document.querySelector(".header-programs");
let btnPrograms = document.querySelector(".btn-programs");
let fgImg1 = document.querySelector(".fg1-programs-img");
let fgImg3 = document.querySelector(".fg3-programs-img");

// Parallax Effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  headerPrograms.style.marginBottom = value * 1 + "px";
  btnPrograms.style.marginTop = value * 1 + "px";
  fgImg1.style.marginTop = value * 0.3 + "px";
  fgImg3.style.marginLeft = value * 0.3 + "px";
});

// Scroll To Section
let programSection = document.querySelector(".programs-scrollTo");
function scrollToPrograms() {
  programSection.scrollIntoView({ behavior: "smooth" });
}

// Let's Begin BTN
let btnLetBegin = document.querySelector(".btn-let-begin");
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 700) {
    btnLetBegin.style.visibility = "visible";
  } else {
    btnLetBegin.style.visibility = "hidden";
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
