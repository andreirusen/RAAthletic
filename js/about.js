let headerAbout = document.querySelector(".header-about");
let bgImg = document.querySelector(".bg-programs-img");
let fgAthlet = document.querySelector(".fg-athlet-programs-img");
let fgImg1 = document.querySelector(".fg1-programs-img");
let fgImg3 = document.querySelector(".fg3-programs-img");
let circleLeft = document.querySelector(".circle-left-img");
let circleRight = document.querySelector(".circle-right-img");
let findOut = document.querySelector(".btn-about");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  headerAbout.style.marginTop = value * 1 + "px";
  fgImg1.style.marginTop = value * 0.3 + "px";
  fgImg3.style.marginLeft = value * 0.3 + "px";
  circleLeft.style.marginRight = value * 0.3 + "px";
  circleRight.style.marginLeft = value * 0.3 + "px";
  fgAthlet.style.marginRight = value * 1 + "px";
});

// Scroll To Section
let contentAbout = document.querySelector(".scrollToAbout");
function scrollToAbout() {
  contentAbout.scrollIntoView({ behavior: "smooth" });
}

// Disapear Btn
let btnLetBegin = document.querySelector(".btn-let-begin");
document.addEventListener("scroll", function () {
  // Proprietatea scrollY reprezinta numarul de pizeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > 400) {
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


// Map - Initialize and add the map
let map;
async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}
initMap();
