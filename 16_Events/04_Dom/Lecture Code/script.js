// Step 1: Get the h1 element by its ID
let h1Element = document.getElementById("heading1");

// Step 2: Set multiple properties individually
// Yahaan hum h1 ke liye background aur text ka rang set kar rahe hain.
h1Element.style.backgroundColor = "red"; // Background ko laal rang dena
h1Element.style.color = "white"; // Text ka rang safed karna

// Step 3: Set multiple properties using cssText
// Hum yahaan ek saath kai CSS properties set kar rahe hain.
h1Element.style.cssText = "background-color: red; color: white;";

// Step 4: Add or Remove CSS Classes
// h1 mein ek CSS class jod rahe hain.
h1Element.classList.add("h1Class"); // h1Class naam ki class jodna

// h1 mein se ek CSS class hata rahe hain.
h1Element.classList.remove("removeClass"); // removeClass naam ki class hatana

// Step 5: Set and remove attributes on the element
// h1 ke ID aur style attribute ko set karna
h1Element.setAttribute("id", "headingId"); // ID ko set karna
h1Element.setAttribute("style", "background-color: red; color: white;"); // Style ko set karna

// Heading par ek title attribute set karna
h1Element.setAttribute("title", "This is heading"); // title attribute set karna

// class attribute ko hatana
h1Element.removeAttribute("class"); // class attribute ko hatana

// Step 6: Get attribute values
// h1 ke class attribute ki value prapt karna
let result = h1Element.getAttribute("class");
console.log(result); // class attribute ki value ko console mein dikhana

// h1 ke sabhi attribute ke naam prapt karna
let attrName = h1Element.getAttributeNames();
console.log(attrName); // Sabhi attributes ke naam console mein dikhana

// Step 7: Use innerHTML, innerText (for content manipulation)

// Example 1: innerHTML - Allows setting or getting the HTML content inside an element
// Yahaan hum h1 ke andar HTML content ko update kar rahe hain, jaise ki ek <span> tag ke saath.
h1Element.innerHTML = "<span>This is a new <strong>heading</strong></span>";
// H1 element mein ab ek <span> aur <strong> tag ke saath content set ho jayega.
console.log(h1Element.innerHTML); // Yeh console mein print karega: <span>This is a new <strong>heading</strong></span>

// Example 2: innerText - Sets or gets the text content of an element, ignoring HTML tags
// Yahaan hum sirf plain text set kar rahe hain, bina kisi HTML tags ke.
h1Element.innerText = "This is a plain text heading";
// H1 element ka content ab sirf plain text hoga, bina kisi HTML tags ke.
console.log(h1Element.innerText); // Yeh console mein print karega: This is a plain text heading

// Step 8: Toggle a class when a button is clicked
// Jab button click hota hai, to h1 mein CSS class ko toggle kiya jayega.
document.getElementById("btnToggle").addEventListener("click", function () {
  let h1Element = document.getElementById("heading1");
  h1Element.classList.toggle("h1Class"); // h1Class naam ki class ko toggle karna
});

// Step 9: Check if an element has a specific attribute
// h1 mein 'id' attribute hai ya nahi, isse check karna.
let h1Element = document.getElementById("heading1");

// Agar 'id' attribute hai, to console mein message dikhayenge.
if (h1Element.hasAttribute("id")) {
  console.log("Attribute exists"); // Agar attribute hai to yeh message dikhayega
} else {
  console.log("Attribute does not exist"); // Agar attribute nahi hai to yeh message dikhayega
}
