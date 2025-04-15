let btn = document.getElementById("btn");

// Method 1: onclick
btn.onclick = function () {
  alert("Clicked using onclick");
};

// Method 2: addEventListener
btn.addEventListener("click", function () {
  alert("Clicked using addEventListener");
});
