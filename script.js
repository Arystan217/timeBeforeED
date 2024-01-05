function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateTime() {
  var now = new Date();
  var novemberFirst = new Date(now.getFullYear(), 10, 1);
  if (now > novemberFirst) {
    novemberFirst.setFullYear(now.getFullYear() + 1);
  }

  var diff = novemberFirst - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var totalHours = Math.floor(diff / (1000 * 60 * 60));
  var totalMinutes = Math.floor(diff / (1000 * 60));
  var totalSeconds = Math.floor(diff / 1000);

  // Use the custom formatting function
  document.getElementById("days").innerText = formatNumberWithSpaces(days);
  document.getElementById("totalHours").innerText =
    formatNumberWithSpaces(totalHours);
  document.getElementById("totalMinutes").innerText =
    formatNumberWithSpaces(totalMinutes);
  document.getElementById("totalSeconds").innerText =
    formatNumberWithSpaces(totalSeconds);
}

setInterval(updateTime, 1000);

const cozyButton = document.querySelector(".cozy");
const wrapper = document.querySelector(".wrapper");

// Function to toggle cozy mode and save state
function toggleCozyMode() {
  wrapper.classList.toggle("cozyMode");

  // Save the state in localStorage
  if (wrapper.classList.contains("cozyMode")) {
    localStorage.setItem("cozyModeBeforeED", "enabled");
  } else {
    localStorage.setItem("cozyModeBeforeED", "disabled");
  }
}

// Event listener for the cozy button
cozyButton.addEventListener("click", toggleCozyMode);

// Check the saved state in localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cozyModeBeforeED") === "enabled") {
    wrapper.classList.add("cozyMode");
  }
});
