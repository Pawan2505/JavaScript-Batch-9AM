// ========================================
// Array Destructuring in JavaScript
// ========================================

// Destructuring is used to unpack values from arrays or properties from objects into distinct variables.

// ----------------------------------------------------
// 1. Basic Destructuring - Extracting values from array
// ----------------------------------------------------

const numbers = [23, 56, 89];
const [a, b, c] = numbers;

console.log(a); // Output: 23
console.log(b); // Output: 56
console.log(c); // Output: 89

// ----------------------------------------------------
// 2. Skipping Elements in Destructuring
// ----------------------------------------------------

const numbersWithSkip = [23, 56, 89];
const [p, , r] = numbersWithSkip;

console.log(p); // Output: 23
console.log(r); // Output: 89

// ----------------------------------------------------
// 3. Using Rest Operator (...) in Destructuring
// ----------------------------------------------------

const moreNumbers = [23, 56, 89, 50];
const [first, second, ...rest] = moreNumbers;

console.log(first); // Output: 23
console.log(second); // Output: 56
console.log(rest); // Output: [89, 50]

// ----------------------------------------------------
// 4. Merging Two Arrays Using Spread Operator
// ----------------------------------------------------

const numbers1 = [23, 56, 89, 50];
const numbers2 = [213, 45, 7, 7];

const mergedArray = [...numbers1, ...numbers2];
console.log(mergedArray);
// Output: [23, 56, 89, 50, 213, 45, 7, 7]

// ----------------------------------------------------
// 5. Swapping Variable Values using Destructuring
// ----------------------------------------------------

let x = 34;
let y = 40;

[x, y] = [y, x];

console.log(x); // Output: 40
console.log(y); // Output: 34

// ----------------------------------------------------
// 6. Destructuring in Function Return Values
// ----------------------------------------------------

function getCoordinate() {
  return [50, 60];
}

const [coordX, coordY] = getCoordinate();

console.log(coordX); // Output: 50
console.log(coordY); // Output: 60
