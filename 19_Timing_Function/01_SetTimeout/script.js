// Initialize a count variable
let count = 0;

// Define the 'add' function which logs the count and increments it
function add() {
  console.log(`Count : ${count}`); // Logs the current count value
  count++; // Increment the count by 1
}

// Use setInterval to call the 'add' function every 1000 milliseconds (1 second)
let interval = setInterval(add, 1000);

// Use setTimeout to stop the interval after 6000 milliseconds (6 seconds)
setTimeout(() => {
  clearInterval(interval); // Clears the interval and stops the 'add' function from running
}, 6000);
