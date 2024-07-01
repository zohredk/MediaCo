// Save this as script.js
function updateTime() {
  const timeElement = document.getElementById("current-time");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const currentTime = `${hours}:${minutes} ${ampm}`;
  timeElement.textContent = ` ${currentTime}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately on load
updateTime();
