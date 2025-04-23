let original = { name: "Pawan", age: 25 };
let clone = Object.assign({}, original);

console.log(clone); // Output: { name: "Pawan", age: 25 }


// Note : Object.assign() ek empty object {} me original object ke properties copy karta hai.