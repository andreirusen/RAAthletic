// Loader
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

// Navbar
const navEL = document.querySelector(".navbar");
var lastScrollY = window.scrollY;
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
var btnToTop = document.querySelector(".btn-to-top");
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
var btnLetBegin = document.querySelector(".btn-let-begin");
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
  var reveals = document.querySelectorAll(".reveal");
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

// Scroll To Timer
const scrollDelay = 1000;
const scrollStepDelay = 1000;
const targetElement = document.getElementById("dashboard-section");

function scrollTo() {
  targetElement.scrollIntoView({ behavior: "smooth" });
}
setTimeout(scrollTo, scrollDelay);

// Calendar container
var calendarContainer = document.getElementById("calendar");
var date = new Date();
displayCalendar(date);

// Function to display the calendar for a given date
function displayCalendar(date) {
  // Get the year and month from the date object
  var year = date.getFullYear();
  var month = date.getMonth();

  // Set the calendar title and select inputs
  var title = "<h2>" + getMonthName(month) + " " + year + "</h2>";
  var selectInputs =
    "<div class='calendars-select'>" +
    "<select class='modal-option' id='month' onchange='changeCalendar()'>" +
    generateMonthOptions(month) +
    "</select>" +
    "<select class='modal-option' id='year' onchange='changeCalendar()'>" +
    generateYearOptions(year) +
    "</select>" +
    "</div>";

  // Generate the calendar table
  var table = "<table>";

  // Generate the table headers
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

  // Calculate the starting position of the first day
  var startDay = (firstDay.getDay() - 1 + 7) % 7;

  for (var i = 0; i < startDay; i++) {
    row += "<td></td>";
  }

  // Generate the calendar cells
  for (var day = 1; day <= daysInMonth; day++) {
    // Check if the current day has an event
    var eventKey = year + "-" + month + "-" + day;
    var event = localStorage.getItem(eventKey);

    // Add event class to the cell if it has an event
    var cellClass = event ? "day event-cell" : "day";
    if (
      day === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    ) {
      cellClass += " current-day";
    }

    // Generate the cell with appropriate event class and onclick handler
    row +=
      "<td class='" +
      cellClass +
      "' onclick='handleCellClick(" +
      year +
      "," +
      month +
      "," +
      day +
      ")'>" +
      day;

    // Display event symbol or options based on the presence of an event
    if (event) {
      row +=
        "<span onclick='showPopup(\"" +
        eventKey +
        '", "' +
        event +
        "\")'>&#9998;</span>";
    } else {
      row += "<span onclick='addEvent(\"" + eventKey + "\")'></span>";
    }

    row += "</td>";

    // Break the row and start a new one at the end of each week
    if (startDay === 6) {
      table += row + "</tr>";
      row = "<tr>";
      startDay = 0;
    } else {
      startDay++;
    }
  }

  // Add empty cells for the remaining days
  if (startDay > 0) {
    for (var i = startDay; i < 7; i++) {
      row += "<td></td>";
    }
  }

  table += row + "</tr>";
  table += "</table>";

  // Combine the calendar elements and display them in the container
  var calendarHTML = title + selectInputs + table;
  calendarContainer.innerHTML = calendarHTML;
}

// Function to get the month name based on the month index
function getMonthName(month) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}

// Function to generate options for month select input
function generateMonthOptions(selectedMonth) {
  var options = "";
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (var i = 0; i < months.length; i++) {
    if (i === selectedMonth) {
      options +=
        "<option value='" + i + "' selected>" + months[i] + "</option>";
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

// Calendar

// Function to change the displayed calendar based on the selected month and year
function changeCalendar() {
  var selectedMonth = document.getElementById("month").value;
  var selectedYear = document.getElementById("year").value;
  var newDate = new Date(selectedYear, selectedMonth);
  displayCalendar(newDate);
}

// Function to add an event to a specific date
function addEvent(eventKey) {
  var modal = document.createElement("div");
  modal.classList.add("modal");

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  var eventInput = document.createElement("input");
  eventInput.classList = "modal-input";
  eventInput.type = "text";
  eventInput.placeholder = "Enter the event description";

  var addButton = document.createElement("button");
  addButton.classList = "modal-btn";
  addButton.textContent = "Add Event";
  addButton.addEventListener("click", function () {
    if (eventInput.value) {
      saveEvent(eventKey, eventInput.value);
      closeModal();
    }
  });

  var closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", closeModal);

  modalContent.appendChild(closeButton);
  modalContent.appendChild(eventInput);
  modalContent.appendChild(addButton);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  function closeModal() {
    document.body.removeChild(modal);
  }
}

// Function to save a new event
function saveEvent(eventKey, event) {
  localStorage.setItem(eventKey, event);
  displayCalendar(new Date());
}

// Function to handle cell click
function handleCellClick(year, month, day) {
  var eventKey = year + "-" + month + "-" + day;
  var event = localStorage.getItem(eventKey);
  if (event) {
    showPopup(eventKey, event);
  } else {
    addEvent(eventKey);
  }
}

// Function to show the pop-up modal with event options
function showPopup(eventKey, event) {
  var modal = document.createElement("div");
  modal.classList.add("modal");

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  var editInput = document.createElement("input");
  editInput.classList = "modal-input"
  editInput.type = "text";
  editInput.value = event;

  var saveButton = document.createElement("button");
  saveButton.classList = "modal-btn"
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function () {
    editEvent(eventKey, editInput.value);
    closeModal();
  });

  var deleteButton = document.createElement("button");
  deleteButton.classList = "modal-btn"
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteEvent(eventKey);
    closeModal();
  });

  var closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", closeModal);

  modalContent.appendChild(closeButton);
  modalContent.appendChild(editInput);
  modalContent.appendChild(saveButton);
  modalContent.appendChild(deleteButton);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  function closeModal() {
    document.body.removeChild(modal);
  }
}

// Function to edit an existing event
function editEvent(eventKey, updatedEvent) {
  localStorage.setItem(eventKey, updatedEvent);
  displayCalendar(new Date());
}

// Function to delete an event
function deleteEvent(eventKey) {
  localStorage.removeItem(eventKey);
  displayCalendar(new Date());
}
// Function to navigate to today's date
function goToToday() {
  var today = new Date();
  var selectedYear = today.getFullYear();
  var selectedMonth = today.getMonth();
  var currentDate = today.getDate();

  // Update the select inputs
  document.getElementById("year").value = selectedYear;
  document.getElementById("month").value = selectedMonth;

  // Display the calendar
  displayCalendar(today);

  // Remove the current-day class from all cells
  var cells = document.querySelectorAll(".calendar-cell");
  cells.forEach(function (cell) {
    cell.classList.add("current-day");
  });

  // Find the cell corresponding to the current day and add the current-day class
  var currentDayCell = document.querySelector(
    ".calendar-cell[data-day='" + currentDate + "']"
  );
  if (currentDayCell) {
    currentDayCell.classList.add("current-day");
  }
}

// Profile IMG
const image = document.querySelector(".profile-img");
const input = document.querySelector(".profile-input");

input.addEventListener("change", () => {
  image.src = URL.createObjectURL(input.files[0]);

  // Save the image to local storage
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageData = e.target.result;
    localStorage.setItem("profilePicture", imageData);
  };
  reader.readAsDataURL(input.files[0]);
});
// Retrieve the saved profile picture from local storage
window.addEventListener("DOMContentLoaded", () => {
  const savedImage = localStorage.getItem("profilePicture");
  if (savedImage) {
    image.src = savedImage;
  }
});
