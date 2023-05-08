// Parallax Effect
let btnHome = document.querySelector(".btn-home");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  btnHome.style.marginTop = value * 0 + "px";
});


// Scroll To Section
let contentSection = document.querySelector(".content-section");
function scrollToContent() {
  contentSection.scrollIntoView({ behavior: "smooth" });
}

//Typing Section
var typed = new Typed("#typed-strings", {
  strings: ["Start exercising today!", "No more excuses!", "You are ready!"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});