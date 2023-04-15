let bgImg = document.querySelector(".bg-programs-img");
let headerPrograms = document.querySelector(".header-programs");
let btnPrograms = document.querySelector(".btn-programs");
let btnLetBegin = document.querySelector(".btn-let-begin");
let fgImg1 = document.querySelector(".fg1-programs-img");
let fgImg3 = document.querySelector(".fg3-programs-img");
let programSection = document.querySelector(".programs-card-section");

// Scroll To Section
function scrollToPrograms() {
    programSection.scrollIntoView({ behavior: "smooth" });
}

// Parallax Effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  headerPrograms.style.marginBottom = value * 1.1 + "px";
  btnPrograms.style.marginTop = value * 1.1 + "px";
  fgImg1.style.marginTop = value * 0.3 + "px";
  fgImg3.style.marginLeft = value * 0.3 + "px";
});

// Let's Begin BTN
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 700) {
    btnLetBegin.style.visibility = "visible";
  } else {
    btnLetBegin.style.visibility = "hidden";
  }
});
