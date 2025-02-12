# **📚 Lecture Notes: JavaScript Functions**  

## **1️⃣ What is a Function?**  
A **function** is a block of code that performs a specific task. It helps us:  
✔ Write reusable code  
✔ Keep our program organized  
✔ Avoid repeating the same code multiple times  

---

## **2️⃣ Function Declaration (Named Functions)**  

A function can be defined using the `function` keyword.  

### **Example 1: Function that Returns a Value**
```js
function multiply(x, y) {
    let result = x * y; // Multiply x and y
    return result; // Return the result
}

console.log(multiply(10, 2)); // Output: 20
```
🔹 **How it works:**  
- The function `multiply()` takes two values (`x` and `y`).  
- It multiplies them and stores the result in a variable.  
- `return result;` sends the answer back to where the function was called.  

🔹 **Why is `return` important?**  
- If a function **returns** a value, we can store or use it later.  
- If a function **doesn't return**, it just performs an action (like printing a value).  

---

### **Example 2: Function Without Return**
```js
function multiplyAndLog(x, y) {
    let result = x * y; // Multiply x and y
    console.log(result); // Just print the result
}

multiplyAndLog(10, 2); // Output: 20
```
💡 **Key Difference:**  
- This function **only prints the result** instead of returning it.  
- If we try `console.log(multiplyAndLog(10, 2));`, it will print `undefined` because nothing is returned.  

---

## **3️⃣ Anonymous Functions (Function Expressions)**  
An **anonymous function** is a function **without a name**. Instead, it is stored inside a variable.  

### **Example: Function Expression**
```js
let sum = function(num1, num2) {
    console.log(num1 + num2); // Log the sum of two numbers
};

sum(10, 20); // Output: 30
sum(50, 10); // Output: 60
```
🔹 **Why use this?**  
- Function expressions are useful when we don’t need to reuse a function by name.  
- We store the function in a variable and use it later.  

---

### **Using `let` vs `const` in Function Expressions**
#### **✅ `let` allows reassignment**
```js
let sum = function(num1, num2) {
    console.log(num1 + num2);
};

sum = "hello"; // Allowed because `let` allows reassignment
console.log(sum); // Output: hello
```
#### **❌ `const` prevents reassignment**
```js
const sumConst = function(num1, num2) {
    console.log(num1 + num2);
};

sumConst(10, 20); // Output: 30

// sumConst = "hello"; // ❌ ERROR: Cannot reassign a `const` variable
```
💡 **Key Takeaway:**  
- Use **`const`** if the function should never change.  
- Use **`let`** if you may need to reassign it later.  

---

## **4️⃣ Arrow Functions (ES6 Feature)**
JavaScript introduced **arrow functions** to make function writing easier.  

### **Syntax of an Arrow Function**
```js
const functionName = (parameters) => { 
   // function body 
};
```
💡 **Arrow functions are shorter and cleaner than normal functions.**  

---

### **Example 1: Arrow Function vs Normal Function**
🔹 **Regular Function**
```js
const sumFunction = function(num1, num2) {
    console.log(num1 + num2);
};
```
🔹 **Arrow Function Equivalent**
```js
const sumArrow = (a, b) => {
    console.log(a + b);
};

sumArrow(12, 36); // Output: 48
```
✨ **Benefits of Arrow Functions:**  
✔ Shorter and cleaner syntax  
✔ Does not create its own `this` (useful in advanced topics)  

---

## **5️⃣ `let` vs `const` vs `var` in JavaScript**
### **Reassigning Variables**
```js
let x = 10;
console.log(x); // Output: 10

x = 20; // ✅ Allowed because `let` allows reassignment
console.log(x); // Output: 20
```
🔹 **Key Points:**
- `let` allows reassignment.  
- `const` does **not** allow reassignment.  
- `var` is outdated and should be avoided due to scope issues.  

---

## **6️⃣ Returning vs Not Returning a Value**
### **Returning a Value**
```js
let greet = function() {
    return "Hello World";
};

console.log(greet()); // Output: Hello World
```
### **Function Without Return**
```js
let greet = function() {
    console.log("Hello World");
};

greet(); // Output: Hello World
```
💡 **Why does it matter?**  
- **Returning** a value allows us to store and use it later.  
- **Not returning** means the function just performs an action (like printing).  

---

## **📝 Summary of Key Concepts**
| Concept | Explanation |
|---------|------------|
| **Function Declaration** | `function add(a, b) { return a + b; }` – Hoisted, can be used before defining. |
| **Function Expression** | `let add = function(a, b) { return a + b; };` – Not hoisted, must be defined first. |
| **Arrow Function** | `const add = (a, b) => a + b;` – Shorter syntax, no `this` binding. |
| **Return vs Console.log** | `return` gives a value back, `console.log` just prints it. |
| **let vs const** | `let` allows reassignment, `const` does not. |

---

## **🎯 Interview Questions**
1️⃣ What is the difference between a **function declaration** and a **function expression**?  
2️⃣ What happens if a function does not have a `return` statement?  
3️⃣ What is the difference between `let` and `const` in JavaScript?  
4️⃣ How does an arrow function differ from a regular function?  
5️⃣ Why is using `var` not recommended in modern JavaScript?  

---
