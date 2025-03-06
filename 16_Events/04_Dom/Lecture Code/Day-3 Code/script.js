// Day 3 JavaScript DOM Manipulation

// Step 1: Select the element with the class 'container' and change its background color to red
let container = document.querySelector(".container");
container.style.backgroundColor = "red"; // Background set to red

// Step 2: Select the element with the id 'para1' and change its text color to white
let paragraph = document.querySelector("#para1");
paragraph.style.color = "white"; // Text color set to white

// Step 3: Select the first 'h1' element and apply italic font style
let heading = document.querySelector("h1");
heading.style.fontStyle = "italic"; // Font style set to italic

// Step 4: Select the first 'h1' element using querySelectorAll and apply italic font style
document.querySelectorAll("h1")[0].style.fontStyle = "italic"; // First 'h1' element

// Step 5: Select the second 'h1' element using querySelectorAll and apply italic font style
document.querySelectorAll("h1")[1].style.fontStyle = "italic"; // Second 'h1' element

// Homework Task: Try using querySelectorAll with class and id

// Example (uncomment and try):
// document.querySelectorAll(".some-class");  // Select elements with a specific class
// document.querySelectorAll("#some-id");     // Select elements with a specific id

// Step 6: Create a new 'h1' element and append it to the product list

// Select the parent element with the class 'product-list'
const product = document.querySelector(".product-list");

// Create a new 'h1' element
const newHeading = document.createElement("h1");

// Set the text content of the newly created 'h1' element
newHeading.textContent = "Apne h1 heading js se create kr liya hai";

// Change the color of the new 'h1' text to green
newHeading.style.color = "green";

// Append the newly created 'h1' element to the parent element
product.appendChild(newHeading);
