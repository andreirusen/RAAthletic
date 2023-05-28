// Loader
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

// Navbar
const navEL = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  // Navbar
  if (lastScrollY < window.scrollY) {
    navEL.classList.add("navbar--hidden");
  } else {
    navEL.classList.remove("navbar--hidden");
  }
  lastScrollY = window.scrollY;
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
("use strict");
(function () {
  var offcanvas = document.getElementById("offcanvas");

  if (!sessionStorage.getItem("offcanvasShown")) {
    var bs_offcanvas = new bootstrap.Offcanvas(offcanvas);
    bs_offcanvas.show();

    sessionStorage.setItem("offcanvasShown", true);
  }
})();





// Get the calendar container
var calendarContainer = document.getElementById("calendar");

// Create a new date object
var date = new Date();

// Display the calendar
displayCalendar(date);

// Function to display the calendar for a given date
function displayCalendar(date) {
  // Get the year and month from the date object
  var year = date.getFullYear();
  var month = date.getMonth();

  // Set the calendar title and select inputs
  var title = "<h2>" + getMonthName(month) + " " + year + "</h2>";
  var selectInputs =
    "<div>" +
    "<label for='month'>Month: </label>" +
    "<select id='month' onchange='changeCalendar()'>" +
    generateMonthOptions(month) +
    "</select>" +
    "<label for='year'>Year: </label>" +
    "<select id='year' onchange='changeCalendar()'>" +
    generateYearOptions(year) +
    "</select>" +
    "</div>";

  // Generate the calendar table
  var table = "<table>";

  // Generate the table headers (days of the week)
  table += "<tr>";
  table += "<th>Sun</th>";
  table += "<th>Mon</th>";
  table += "<th>Tue</th>";
  table += "<th>Wed</th>";
  table += "<th>Thu</th>";
  table += "<th>Fri</th>";
  table += "<th>Sat</th>";
  table += "</tr>";

  // Get the first day of the month
  var firstDay = new Date(year, month, 1);

  // Get the number of days in the month
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calculate the starting position of the first day
  var startDay = firstDay.getDay();

  // Generate the calendar rows
  var row = "<tr>";
  for (var i = 0; i < startDay; i++) {
    row += "<td></td>";
  }

  // Generate the calendar cells
  for (var day = 1; day <= daysInMonth; day++) {
    // Check if the current day has an event
    var eventKey = year + "-" + month + "-" + day;
    var event = localStorage.getItem(eventKey);

    // Format the cell with or without an event
    if (event) {
      row += "<td class='event-cell' onclick='showEvent(\"" + event + "\")'>" + day + "<span class='delete-event' onclick='deleteEvent(\"" + eventKey + "\", event)'>!</span></td>";
    } else {
      row += "<td onclick='addEvent(\"" + eventKey + "\")'>" + day + "</td>";
    }

    // Start a new row at the beginning of each week
    if (startDay % 7 == 6) {
      table += row + "</tr>";
      row = "<tr>";
    }

    startDay++;
  }

  // Add the remaining empty cells
  if (startDay % 7 != 0) {
    for (var i = startDay % 7; i < 7; i++) {
      row += "<td></td>";
    }
  }

  table += row + "</tr>";
  table += "</table>";

  // Set the calendar content
  calendarContainer.innerHTML = title + selectInputs + table;
}

// Function to get the name of the month
function getMonthName(month) {
  var months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  return months[month];
}

// Function to generate options for month select input
function generateMonthOptions(selectedMonth) {
  var options = "";
  var months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  for (var i = 0; i < months.length; i++) {
    if (i === selectedMonth) {
      options += "<option value='" + i + "' selected>" + months[i] + "</option>";
    } else {
      options += "<option value='" + i + "'>" + months[i] + "</option>";
    }
  }
  return options;
}

// Function to generate options for year select input
function generateYearOptions(selectedYear) {
  var options = "";
  var currentYear = new Date().getFullYear();
  for (var i = currentYear - 10; i <= currentYear + 10; i++) {
    if (i === selectedYear) {
      options += "<option value='" + i + "' selected>" + i + "</option>";
    } else {
      options += "<option value='" + i + "'>" + i + "</option>";
    }
  }
  return options;
}

// Function to change the displayed calendar based on the selected month and year
function changeCalendar() {
  var selectedMonth = document.getElementById("month").value;
  var selectedYear = document.getElementById("year").value;
  var newDate = new Date(selectedYear, selectedMonth);
  displayCalendar(newDate);
}

// Function to add an event to a specific date
function addEvent(eventKey) {
  var event = prompt("Enter the event:");
  if (event) {
    localStorage.setItem(eventKey, event);
    displayCalendar(new Date());
  }
}

// Function to remove an event from a specific date
function deleteEvent(eventKey, event) {
  event.stopPropagation();
  if (confirm("Are you sure you want to delete this event?")) {
    localStorage.removeItem(eventKey);
    displayCalendar(new Date());
  }
}

// Function to show the event details
function showEvent(event) {
  alert(event);
}
