// Normal function

// function add(x,y){
//     let result = x*y;

//     return result;
// }

// console.log(add(10,2));

// function add(x,y){
//     let result = x*y;

//    console.log(result);
// }

// // console.log(add(10,2)); // undefine

// add(10,2);

// anonymous function

//  let result = function(num1,num2){
//     console.log(num1+num2);
//  }

//  result(10,20);

//  result(50,10);

//  result  = "hello"

//  console.log(result)

//  const result = function(num1,num2){
//     console.log(num1+num2);
//  }

//  result(10,20);

//  result(50,10);

//  result = "hello"

//  console.log(result)

// let x = 10;

// console.log(x)

// x = 20;

// console.log(x)

// let result = function(){
//     return "Hello World";
// }

// console.log(result);

// result = "hello"

// console.log(result)

// let result = function(){
//     return "Hello World";
// }

// console.log(result());

// result = "hello"

// console.log(result)

// Arrow function

// syntax

// ()=>{}

// function(num1,num2){
//     console.log(num1+num2);
//  }

//   const arrow = (a,b) =>{

//         console.log(a+b);

//   }

//   arrow(12,36);

//   const arrow = (a,b) =>{

//         console.log(a+b);

//   }

//   arrow(12,36);


/************************************Formated Lecture Code************************************************ */



//1. Function Declarations (Named Functions)

// Function with return value
function multiply(x, y) {
  let result = x * y; // Multiply x and y
  return result; // Return the result
}

console.log(multiply(10, 2)); // Output: 20

// Function without return (just logs output)
function multiplyAndLog(x, y) {
  let result = x * y; // Multiply x and y
  console.log(result); // Print the result
}

multiplyAndLog(10, 2); // Output: 20

// console.log(multiplyAndLog(10, 2)); // ❌ Undefined because function does not return a value

//2. Anonymous Function (Function Expression)

// Anonymous function assigned to a variable
let sum = function (num1, num2) {
  console.log(num1 + num2); // Log the sum of two numbers
};

sum(10, 20); // Output: 30
sum(50, 10); // Output: 60

//3. Reassigning variable (possible with `let`)
sum = "hello"; // Allowed because `let` allows reassignment
console.log(sum); // Output: hello

// 4.Using const with Function Expressions

// Using const prevents reassignment
const sumConst = function (num1, num2) {
  console.log(num1 + num2);
};

sumConst(10, 20); // Output: 30
sumConst(50, 10); // Output: 60

// sumConst = "hello"; // ❌ Error: Assignment to constant variable
// console.log(sumConst); // This will cause an error

//5. Reassigning let Variables

let x = 10;
console.log(x); // Output: 10

x = 20; // ✅ Allowed because `let` allows reassignment
console.log(x); // Output: 20

//let x = 10;
console.log(x); // Output: 10

x = 20; // ✅ Allowed because `let` allows reassignment
console.log(x); // Output: 20

//6. Returning Values from Function Expressions

// Function that returns a value
let greet = function () {
  return "Hello World";
};

console.log(greet()); // Output: Hello World

greet = "hello"; // ✅ Allowed because `let` allows reassignment
console.log(greet); // Output: hello

//7. Arrow Functions (ES6)

// Arrow function syntax: () => {}

// Regular function expression
const sumFunction = function(num1, num2) {
    console.log(num1 + num2);
};

// sumFunction();

// Arrow function equivalent
const sumArrow = (a, b) => {
    console.log(a + b);
};

sumArrow(12, 36); // Output: 48

