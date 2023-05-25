// Scroll To Timer
const scrollDelay = 1000;
const scrollStepDelay = 1000;
const targetElement = document.getElementById("dashboard");

function scrollTo() {
  targetElement.scrollIntoView({ behavior: "smooth" });
}

setTimeout(scrollTo, scrollDelay);