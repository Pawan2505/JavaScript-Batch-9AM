# Lecture Notes on **Import and Export Modules in JavaScript**

---

### **Introduction to Modules in JavaScript**

In JavaScript, **modules** allow you to break your code into smaller, manageable files. This makes it easier to maintain and avoid errors, especially when the project grows larger. You can use **import** and **export** to share code between different files, helping to keep the code clean and organized.

In simple terms:
- **Export**: Making a function or variable available to other files.
- **Import**: Bringing in those functions or variables into another file.

Before ES6 (2015), JavaScript didn’t have a native module system, but now, with ES6, we can easily divide our code into different files and import/export them as needed.

---

### **HTML Setup for Using Modules**

In order to use JavaScript modules in the browser, we need to specify that a script is a module. This is done by adding `type="module"` in the `<script>` tag in your HTML file.

#### **HTML Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Import and Export</title>
</head>
<body>
    <script type="module" src="script.js"></script>
</body>
</html>
```

- The `type="module"` attribute tells the browser that `script.js` is a module, allowing the use of **import** and **export** features.

---

### **Exporting in JavaScript**

In JavaScript, there are two main ways to **export** functionality from a module:
1. **Named Exports**: For exporting multiple items from a module.
2. **Default Exports**: For exporting a single item.

#### **1. Named Exports**

Named exports allow you to export more than one function, variable, or object from a file.

Example:

```javascript
// main.js

function addition(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// Exporting functions with new names
export { addition as add, subtract as sub, multiply as mul, divide as di };
```

Here, we have four functions (`addition`, `subtract`, `multiply`, and `divide`), and we export them with **new names** using `as` (aliases).

#### **2. Default Exports**

If you are exporting a **single item** (like one function or object), you can use the **default export**.

Example:

```javascript
// main.js

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  }
};

// Export the calculator object as default
export default calculator;
```

---

### **Importing in JavaScript**

Now, we will see how to **import** the exported functions or objects into another JavaScript file. 

#### **1. Importing Named Exports**

If you used **named exports**, you can import them into another file by their names:

```javascript
// script.js

import { add, sub, mul, di } from "./main.js";  // Importing by name

let sum = add(1000, 50);
console.log(`Sum: ${sum}`);

let difference = sub(5000, 20);
console.log(`Subtraction: ${difference}`);

let product = mul(50, 20);
console.log(`Multiplication: ${product}`);

let quotient = di(50, 2);
console.log(`Division: ${quotient}`);
```

#### **2. Importing Default Exports**

For **default exports**, you can import the item without curly braces:

```javascript
// script.js

import calculator from "./main.js";  // Import default export

let sum = calculator.add(1000, 50);
console.log(`Sum: ${sum}`);

let difference = calculator.subtract(5000, 20);
console.log(`Subtraction: ${difference}`);
```

In this case, `calculator` is an object with multiple functions inside it, and we can call those functions after importing the object.

#### **3. Importing Everything from a Module**

If you want to import everything from a module and access it using one object, you can use `*` (wildcard) syntax:

```javascript
// script.js

import * as math from "./main.js";  // Import everything

console.log(math.add(100, 200));  // Using math.add
console.log(math.sub(500, 200));  // Using math.sub
```

Here, we imported all the functions and variables from `main.js` into the `math` object, and we can access them like `math.add`, `math.sub`, etc.

---

### **Best Practices in Import and Export**

1. **Use Named Exports for Multiple Items**: If you have multiple functions or variables to export from a module, use **named exports**. This keeps things clear and organized.
   
2. **Use Default Export for a Single Item**: When you only have one thing to export, such as one function or object, use **default export** for simplicity.

3. **Import Only What You Need**: If you only need a few functions from a module, import only those instead of importing everything. This makes your code more efficient.

4. **Maintain Good File Structure**: Organize your modules logically. For example, group all utility functions in one file, all data-related code in another, etc.

5. **Avoid Circular Dependencies**: Be careful when importing and exporting between modules to prevent circular dependencies (when Module A imports Module B, and Module B imports Module A).

---

### **Why Use Modules?**

1. **Code Organization**: With modules, we can split our code into smaller, reusable files that are easy to manage.
2. **Reusability**: Once you export a function or variable, you can use it in many other files, avoiding code duplication.
3. **Avoiding Global Scope Pollution**: Modules use their own scope, so the variables and functions inside a module won’t accidentally conflict with other parts of your code.
4. **Easier Maintenance**: With modular code, it's easier to locate bugs, make changes, and scale your project.

---

### **Complete Code Example**

Let’s put everything together to see how it works in a full example.

#### **main.js**:

```javascript
// Define functions
function addition(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// Export functions with custom names
export { addition as add, subtract as sub, multiply as mul, divide as di };
```

#### **script.js**:

```javascript
// Import functions from main.js
import { add, sub, mul, di } from "./main.js";  

// Call imported functions and display the results
let sum = add(1000, 50);
console.log(`Sum: ${sum}`);

let difference = sub(5000, 20);
console.log(`Subtraction: ${difference}`);

let product = mul(50, 20);
console.log(`Multiplication: ${product}`);

let quotient = di(50, 2);
console.log(`Division: ${quotient}`);
```

### **Note:**

Using **import** and **export** in JavaScript helps in writing cleaner, modular code. By dividing your code into small, reusable parts (modules), you can make it more organized, maintainable, and scalable. This is especially useful when your project grows larger.

---
