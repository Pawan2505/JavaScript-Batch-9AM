// Select the element with the class 'container' and change its background color to red
// let container = document.querySelector(".container");
// container.style.backgroundColor = "red";

// Select the element with the id 'para1' and change its text color to white
// let paragraph = document.querySelector("#para1");
// paragraph.style.color = "white";

// Select the first 'h1' element and apply italic font style
// let heading = document.querySelector("h1");
// heading.style.fontStyle = "italic";

// Select the first 'h1' element using querySelectorAll and apply italic font style
document.querySelectorAll("h1")[0].style.fontStyle = "italic"; // First 'h1' element

// Select the second 'h1' element using querySelectorAll and apply italic font style
document.querySelectorAll("h1")[1].style.fontStyle = "italic"; // Second 'h1' element

// Homework task -> Try using querySelectorAll with class and id
// Example (uncomment and try):
// document.querySelectorAll(".some-class");  // Select elements with a specific class
// document.querySelectorAll("#some-id");     // Select elements with a specific id

// Create a new 'h1' element and append it to the product list
const product = document.querySelector(".product-list");

// Create a new 'h1' element
const heading = document.createElement("h1");

// Set the text content of the 'h1' element
heading.textContent = "Apne h1 heading js se create kr liya hai";

// Change the color of the new 'h1' text to green
heading.style.color = "green";

// Append the newly created 'h1' element to the parent element
product.appendChild(heading);

// Additional unfinished code can be placed here as needed
