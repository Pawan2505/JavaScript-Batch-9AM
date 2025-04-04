// ========================================
// Array and Object Operations in JavaScript
// ========================================

// ----------------------------------------------------
// 1. Copying an Array using Spread Operator
// ----------------------------------------------------

let arr = [1, 2, 3, 4, 5];
let newArray = [...arr];

console.log(newArray);
// Output: [1, 2, 3, 4, 5]

// ----------------------------------------------------
// 2. Adding New Elements to an Array
// ----------------------------------------------------

// Add one element at the end
let arrayWithOne = [...arr, "Pawan"];
console.log(arrayWithOne);
// Output: [1, 2, 3, 4, 5, "Pawan"]

// Add elements at beginning and end
let arrayWithMultiple = [true, ...arr, "Pawan"];
console.log(arrayWithMultiple);
// Output: [true, 1, 2, 3, 4, 5, "Pawan"]

// Overwrite original array with new value added
arr = [...arr, "Pawan"];
console.log(arr);
// Output: [1, 2, 3, 4, 5, "Pawan"]

// ----------------------------------------------------
// 3. Merging Two Arrays
// ----------------------------------------------------

const numbers1 = [23, 56, 89, 50];
const numbers2 = [213, 45, 7, 7];

let mergedArray = [...numbers1, ...numbers2];
console.log(mergedArray);
// Output: [23, 56, 89, 50, 213, 45, 7, 7]

// ========================================
// Object Operations in JavaScript
// ========================================

// ----------------------------------------------------
// 4. Copying an Object
// ----------------------------------------------------

const obj1 = {
  id: 1,
  name: "Sejal",
};

const obj2 = { ...obj1 };
console.log(obj2);
// Output: { id: 1, name: "Sejal" }

// ----------------------------------------------------
// 5. Merging Two Objects
// ----------------------------------------------------

let employee1 = {
  name: "Dhruv",
  salary: 10000000000,
};

const employee2 = {
  id: 1,
  name: "Nency", // This will override 'name' from employee1
};

const mergedObject = { ...employee1, ...employee2 };
console.log(mergedObject);
// Output: { name: "Nency", salary: 10000000000, id: 1 }

// ----------------------------------------------------
// 6. Updating an Object Property
// ----------------------------------------------------

employee1 = { ...employee1, salary: 10000 };
console.log(employee1);
// Output: { name: "Dhruv", salary: 10000 }

// ----------------------------------------------------
// 7. Adding New Properties to an Object
// ----------------------------------------------------

employee1 = { id: 1, ...employee1, address: "Gujrat" };
console.log(employee1);
// Output: { id: 1, name: "Dhruv", salary: 10000, address: "Gujrat" }
