# **Lecture Notes: JavaScript Hoisting, Closures, and IIFE**

## **Introduction**
In this Notes, we will cover **Hoisting**, **Closures**, and **IIFE (Immediately Invoked Function Expressions)** in JavaScript. These concepts are fundamental to understanding how JavaScript handles variable and function declarations, scope, and execution.

---

## **1. Hoisting in JavaScript**
**Hoisting** is JavaScript's default behavior of moving **variable and function declarations** to the top of their scope before code execution. However, **only declarations** are hoisted, **not initializations**.

### **1.1 Hoisting with `var`**
```js
console.log(x); // undefined (hoisted but not assigned)
var x = 10;
console.log(x); // 10
```
- **Explanation:**  
  - `var x;` is hoisted to the top, so `console.log(x)` does not throw an error.
  - However, the value is not assigned until later, so it prints `undefined`.

---

### **1.2 Hoisting with `let` and `const`**
```js
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // ✅ Works after declaration
```
```js
console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // ✅ Works after declaration
```
- **Explanation:**  
  - Unlike `var`, `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until they are initialized.
  - Accessing them before declaration results in a **ReferenceError**.

---

### **1.3 Function Declarations vs Function Expressions**
#### ✅ **Function Declarations are Hoisted**
```js
sayHello(); // ✅ Works even before function is declared

function sayHello() {
    console.log("Hello, Students!");
}
```
- **Explanation:**  
  - Function declarations are fully hoisted, meaning they can be called before being defined.

#### ❌ **Function Expressions are NOT Hoisted**
```js
console.log(sum(5, 10)); // ❌ ReferenceError: Cannot access 'sum' before initialization

const sum = function (a, b) {
    return a + b;
};

console.log(sum(5, 10)); // ✅ Works after declaration
```
- **Explanation:**  
  - Function expressions are not hoisted like function declarations.
  - The function is stored in a variable, and the variable is hoisted **without initialization**.

---

### **1.4 Hoisting with Arrow Functions**
```js
console.log(add(3, 7)); // ❌ ReferenceError: Cannot access 'add' before initialization

const add = (a, b) => a + b;

console.log(add(3, 7)); // ✅ Works after declaration
```
- **Explanation:**  
  - Arrow functions assigned to `const` are not hoisted in a usable way.
  - The function is stored in a variable, and the variable itself is hoisted **without initialization**.

---

### **1.5 Hoisting with Classes**
```js
const obj = new Person(); // ❌ ReferenceError: Cannot access 'Person' before initialization

class Person {
    constructor(name) {
        this.name = name;
    }
}

const user = new Person("Mastur"); // ✅ Works after declaration
console.log(user.name); // Mastur
```
- **Explanation:**  
  - **Classes are hoisted** but **not initialized** before their declaration.

---

## **2. Closures in JavaScript**
A **closure** is a function that "remembers" the variables from its parent scope even after the parent function has finished execution.

### **2.1 Nested Functions (Without Closure)**
```js
function outerFun() {
    console.log("Outer function called...");

    function innerFun() {
        console.log("Inner function called...");
    }
}

innerFun(); // ❌ ReferenceError: innerFun is not defined
```
- **Explanation:**  
  - `innerFun()` is defined inside `outerFun()`, so it **cannot be accessed globally**.

---

### **2.2 Nested Function (With Execution)**
```js
function outerFun() {
    console.log("Outer function called...");

    function innerFun() {
        console.log("Inner function called...");
    }

    innerFun(); // ✅ Works because it is called inside outerFun()
}

outerFun();
```
- **Explanation:**  
  - Here, `innerFun()` is called inside `outerFun()`, so it executes correctly.

---

### **2.3 Returning a Function (Closure)**
```js
function outerFun() {
    console.log("Outer function called...");

    return function() {
        return "Hello, World!";
    };
}

let inner = outerFun(); // ✅ outerFun() is called, and it returns the inner function
console.log(inner()); // ✅ Calls the returned function
```
- **Explanation:**  
  - `outerFun()` returns an **anonymous function**.
  - When we store `outerFun()` in `inner`, `inner` now holds a reference to that function.
  - Calling `inner()` executes the function.

---

### **2.4 Closure Example - Remembering Previous Value**
```js
function counter() {
    let count = 0; // Private variable

    return function() {
        count++;
        return count;
    };
}

let increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
console.log(increment()); // 4
```
- **Explanation:**  
  - The `count` variable is **not accessible globally**.
  - Each call to `increment()` **remembers the previous value**.

---

## **3. IIFE (Immediately Invoked Function Expressions)**
An **IIFE (Immediately Invoked Function Expression)** is a function that runs as soon as it is defined.

### **3.1 Basic Syntax**
```js
(function() {
    console.log("IIFE executed!");
})();
```
- **Explanation:**  
  - The function is wrapped in `()` and immediately invoked with `()`.

---

### **3.2 IIFE with Parameters**
```js
(function(x, y) {
    console.log(x + y);
})(10, 20);
```
- **Explanation:**  
  - This IIFE takes arguments and executes immediately.

---

### **3.3 IIFE with Return Value**
```js
let result = (function(x, y) {
    return x + y;
})(10, 20);

console.log(result); // 30
```
- **Explanation:**  
  - The function **returns a value** and immediately assigns it to `result`.

---

## **Note:**
| Concept | Hoisted? | Usable Before Declaration? |
|---------|---------|----------------------------|
| `var` | ✅ Yes | ❌ Undefined |
| `let` | ✅ Yes | ❌ ReferenceError (TDZ) |
| `const` | ✅ Yes | ❌ ReferenceError (TDZ) |
| Function Declaration | ✅ Yes | ✅ Yes |
| Function Expression (`var`) | ✅ Yes | ❌ TypeError |
| Function Expression (`let/const`) | ✅ Yes | ❌ ReferenceError |
| Arrow Function (`let/const`) | ✅ Yes | ❌ ReferenceError |
| Class Declaration | ✅ Yes | ❌ ReferenceError |

---
