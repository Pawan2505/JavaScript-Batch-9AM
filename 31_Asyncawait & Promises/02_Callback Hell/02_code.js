function stepOne(data, callback) {
  console.log("Step 1 with data:", data);
  callback(data + 1);
}

function stepTwo(data, callback) {
  console.log("Step 2 with data:", data);
  callback(data + 1);
}

function stepThree(data) {
  console.log("Step 3 with data:", data);
}

stepOne(1, function (result1) {
  stepTwo(result1, function (result2) {
    stepThree(result2);
  });
});
