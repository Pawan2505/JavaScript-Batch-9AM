/***************************************************************** */
// Example of Hoisting with var
// Variables declared with var are hoisted to the top, but their values are not assigned yet.

var x; // Hoisted to the top (but value is not assigned yet)
console.log(x); // undefined (because no value assigned yet)
x = 10; // Now value is assigned
console.log(x); // 10

/***************************************************************** */
// Example of Hoisting with const
// Variables declared with const are hoisted but cannot be accessed before initialization.

console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // ✅ Works after declaration

/************************************************************************ */
// Function Expressions using var
// Function expressions assigned to var are hoisted, but their values are not assigned until execution.

console.log(sum(5, 10)); // ❌ TypeError: sum is not a function

var sum = function (a, b) {
    return a + b;
};

console.log(sum(5, 10)); // ✅ Works after declaration

/**************************************************************************** */
// Example of Hoisting with let
// Variables declared with let are hoisted but cannot be accessed before initialization (Temporal Dead Zone).

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // ✅ Works after declaration

/************************************************************************ */
// Arrow Functions with const
// Arrow functions assigned to const are not hoisted in a usable way.

console.log(add(3, 7)); // ❌ ReferenceError: Cannot access 'add' before initialization

const add = (a, b) => a + b;

console.log(add(3, 7)); // ✅ Works after declaration

/***************************************************************** */
// Function Declarations are Hoisted
// Function declarations are fully hoisted, meaning they can be called before they are defined.

sayHello(); // ✅ Works even before function is declared

function sayHello() {
    console.log("Hello, Students!");
}

/****************************************************************** */
// Function Expressions using let or const are NOT hoisted
// Unlike function declarations, function expressions must be defined before use.

console.log(sum(5, 10)); // ❌ ReferenceError: Cannot access 'sum' before initialization

const sum = function (a, b) {
    return a + b;
};

console.log(sum(5, 10)); // ✅ Works after declaration

/***************************************************************** */
// Example of Hoisting with let (Revisited)
// Again, let variables cannot be accessed before declaration.

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // ✅ Works after declaration

/***************************************************************** */
// Example of Hoisting with Classes
// Classes are hoisted, but they cannot be accessed before declaration.

const obj = new Person(); // ❌ ReferenceError: Cannot access 'Person' before initialization

class Person {
    constructor(name) {
        this.name = name;
    }
}

const user = new Person("Mastur"); // ✅ Works after declaration
console.log(user.name); // Mastur
