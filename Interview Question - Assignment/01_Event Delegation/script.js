document.getElementById("myList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});



// Note : Event delegation is a technique where you add one event listener to a parent (ancestor) element instead of adding event listeners to each individual child eleme