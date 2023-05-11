// Scroll To Section
let contentAbout = document.querySelector(".scrollToPrograms");
function scrollToPrograms() {
  contentAbout.scrollIntoView({ behavior: "smooth" });
}

function check() {
  var checkBox = document.getElementById("checkbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
check();
