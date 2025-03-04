// let h1Element = document.getElementById("heading1");

// // Set multiple properties individually
// h1Element.style.backgroundColor = "red";
// h1Element.style.color = "white";


// let h1Element = document.getElementById("heading1");

// // Set multiple properties using cssText

// h1Element.style.cssText = "background-color : red; color : white;"



// let h1Element = document.getElementById("heading1");

// h1Element.classList.add("h1Class");

// h1Element.classList.remove("removeClass");


// let h1Element = document.getElementById("heading1");

// h1Element.setAttribute("id", "headingId");

// h1Element.setAttribute("style", "background-color : red; color : white;");

// h1Element.setAttribute("title","This is heading")

// h1Element.removeAttribute("class");


// let h1Element = document.getElementById("heading1");
// let result = h1Element.getAttribute("class");
// console.log(result);

// let attrName = h1Element.getAttributeNames();

// console.log(attrName);

// we can also use innerHTML, innerText, innerContext



// document.getElementById("btnToggle").addEventListener("click", function () {
//     let h1Element = document.getElementById("heading1");
//     h1Element.classList.toggle("h1Class");
// })


let h1Element = document.getElementById("heading1");

// Check if the element has a 'data-id' attribute
if (h1Element.hasAttribute("id")) {
  console.log("Attribute exists");
} else {
  console.log("Attribute does not exist");
}
