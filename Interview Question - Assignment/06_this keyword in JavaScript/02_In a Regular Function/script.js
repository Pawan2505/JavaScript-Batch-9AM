function showThis() {
  console.log(this);  // In a browser, it will log the window object
}

showThis();  // Output: Window { ... } (in the browser)
