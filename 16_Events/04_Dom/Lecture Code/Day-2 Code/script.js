// Step 1: Get the h1 element by its ID
let h1Element = document.getElementById("heading1");

// Step 2: Set multiple properties individually
h1Element.style.backgroundColor = "red"; // Background to red
h1Element.style.color = "white"; // Text color to white

// Step 3: Set multiple properties using cssText
h1Element.style.cssText = "background-color: red; color: white;";

// Step 4: Add or Remove CSS Classes
h1Element.classList.add("h1Class"); // Add 'h1Class' to the h1 element
h1Element.classList.remove("removeClass"); // Remove 'removeClass' from the h1 element

// Step 5: Set and remove attributes on the element
h1Element.setAttribute("id", "headingId"); // Set a new 'id' for the h1
h1Element.setAttribute("style", "background-color: red; color: white;"); // Set style
h1Element.setAttribute("title", "This is a heading"); // Set a title attribute

// Step 6: Get attribute values
let result = h1Element.getAttribute("class");
console.log(result); // Log the class attribute's value

let attrName = h1Element.getAttributeNames();
console.log(attrName); // Log all attribute names

// Step 7: Use innerHTML, innerText (for content manipulation)
h1Element.innerHTML = "<span>This is a new <strong>heading</strong></span>";
console.log(h1Element.innerHTML); // Log the innerHTML content

h1Element.innerText = "This is a plain text heading";
console.log(h1Element.innerText); // Log the innerText content

// Step 8: Toggle a class when a button is clicked
document.getElementById("btnToggle").addEventListener("click", function () {
  h1Element.classList.toggle("h1Class"); // Toggle 'h1Class' on the h1 element
});

// Step 9: Check if an element has a specific attribute
if (h1Element.hasAttribute("id")) {
  console.log("Attribute exists");
} else {
  console.log("Attribute does not exist");
}

// Step 10: Using getElementsByTagName to manipulate multiple elements

// Access all <p> tags in the document
let p1 = document.getElementsByTagName("p")[0];
p1.innerText = "aa ja bhai"; // Change the text of the first paragraph

let p2 = document.getElementsByTagName("p")[1];
console.log(p2.innerText); // Log the text of the second paragraph

// Toggle a class on all paragraphs when a button is clicked
document.getElementById("btnToggle").addEventListener("click", function () {
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.toggle("toggled"); // Toggle class on each <p> element
  }
});
