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

let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 44.434831044470364, lng: 26.147003026598945 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: { lat: 44.434831044470364, lng: 26.147003026598945 },
    map: map,
    // label: "RA",
    title: "RA Athletic",
    Animation: google.maps.Animation.BOUNCE
  })
}
initMap();