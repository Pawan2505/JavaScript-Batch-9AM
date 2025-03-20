// Initialize a variable `count` with a value of 1
let count = 1;

// Function to log the current value of `count` and increment it
function counter() {
  console.log(`Count : ${count}`);
  count++; // Increment count by 1 after each function call
}

// Set an interval to call the `counter` function every 1 second (1000 milliseconds)
let interval = setInterval(counter, 1000);

// After 10 seconds, stop the interval using clearInterval
setTimeout(() => {
  clearInterval(interval); // This will stop the counter after 10 seconds
}, 10000);

console.log("Start");

// Set a timeout to log a message after 2 seconds
setTimeout(() => {
  console.log("This is after 2 seconds"); // Log message after 2 seconds
}, 2000);

console.log("End");

// Set a timeout to log a message after 5 seconds
let timer = setTimeout(() => {
  console.log("This won't be shown."); // This will not execute because we clear the timeout below
}, 5000);

console.log("Clear...");

// Clear the timeout we set earlier, so the message won't be shown
clearTimeout(timer);

// Example of using setTimeout to handle search input after a delay
let timeoutId;

// Function to simulate handling search input with a delay (debouncing)
function handleSearchInput() {
  // Clear any previous timeout if the user is typing again
  timeoutId = setTimeout(() => {
    console.log("Searching for: ");
  }, 500); // Wait for 500ms after the user stops typing
  clearTimeout(timeoutId); // Clear timeout to prevent the search from being triggered immediately
}

// Call the handleSearchInput function
handleSearchInput();

// Calculate the time difference between now and a specific end date
const endDate = "Thu Mar 20 2025 11:28:14 AM";

// Create a new Date object for the end date
const end = new Date(endDate);

// Create a new Date object for the current date and time
const now = new Date();

// Calculate the difference between the two dates in hours
let diff = (end - now) / 1000 / 3600; // Convert difference from milliseconds to hours

console.log(diff); // Log the difference (in hours) between now and the end date
