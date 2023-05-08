// Scroll To Section
let programSection = document.querySelector(".programs-scrollTo");
function scrollToPrograms() {
  programSection.scrollIntoView({ behavior: "smooth" });
}

// Parallax Effect
let headerShowcase = document.querySelector("#header-showcase");
let bgImg = document.querySelector("#bg-img");
let fgImg1 = document.querySelector("#fg1-img");
let fgImg2 = document.querySelector("#fg2-img");
let fgImg3 = document.querySelector("#fg3-img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  headerShowcase.style.marginTop = value * 1 + "px";
  fgImg1.style.marginTop = value * 0.4 + "px";
  fgImg2.style.marginBottom = value * 0.8 + "px";
  fgImg3.style.marginLeft = value * 0.8 + "px";
});