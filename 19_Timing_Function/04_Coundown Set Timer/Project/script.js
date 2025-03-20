// Set the target end date (the event or deadline time) as a string
const endDate = "Fri Mar 21 2025 11:39:53 AM";

// Display the target end date on the webpage in an HTML element with the id "end-date"
document.getElementById("end-date").innerHTML = `End time: ${endDate}`;

// Get all the input elements on the page
let inputs = document.getElementsByTagName("input");

// Function to calculate the time difference and update the countdown
function clock() {
  // Create a Date object for the target end date
  const end = new Date(endDate);

  // Create a Date object for the current time
  const now = new Date();

  // Calculate the difference in seconds between the end date and current time
  let diff = (end - now) / 1000; // Convert milliseconds to seconds

  // If the target time has passed (i.e., the difference is negative), stop the countdown
  if (diff < 0) {
    return; // Stop execution if the time has passed
  }

  // Calculate and update the countdown in the input fields for days, hours, minutes, and seconds
  inputs[0].value = Math.floor(diff / 60 / 60 / 24); // Calculate days
  inputs[1].value = Math.floor((diff / 60 / 60) % 24); // Calculate hours (mod 24 to ensure it stays within a day)
  inputs[2].value = Math.floor((diff / 60) % 60); // Calculate minutes (mod 60 to stay within an hour)
  inputs[3].value = Math.floor(diff % 60); // Calculate seconds (mod 60 to stay within a minute)
}

// Call the clock function every second (1000 milliseconds) to update the countdown
setInterval(clock, 1000);
