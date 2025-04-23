function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count is:", count);
  };
}

let increment = counter();
increment(); // Output: Count is: 1
increment(); // Output: Count is: 2
