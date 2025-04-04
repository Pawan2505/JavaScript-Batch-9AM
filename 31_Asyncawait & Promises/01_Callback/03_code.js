function first(callback) {
  console.log("Step 1");
  callback();
}

function second() {
  console.log("Step 2");
}

first(second);
