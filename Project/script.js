// Step 1: Simple array (for starting example)
const arr = [12, 34, 5, 6, 67];

// Step 2: Basic non-async function (for concept introduction)
function waitSimple() {
  console.log("Wait function started...");
  return arr;
}

// Step 3: Using the above simple function in an async function
async function getSimpleData() {
  let response = waitSimple();
  console.log("Simple Response:", response);
}
// getSimpleData(); // Uncomment to run

// Step 4: Async wait function using Promise and setTimeout
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successfully Resolved after " + ms + "ms");
    }, ms);
  });
}

// Step 5: Awaiting the async wait function
async function getAllData() {
  console.log("Waiting...");
  let response = await wait(2000); // waits for 2 seconds
  console.log("Response:", response);
}
// getAllData(); // Uncomment to run

// Step 6: Fetching data from an API using async/await
const URL = "https://dummyjson.com/quotes";

async function getData() {
  try {
    let response = await fetch(URL); // API call
    let data = await response.json(); // Convert to JSON
    console.log("API Data:", data); // Print data
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
// getData(); // Uncomment to run
