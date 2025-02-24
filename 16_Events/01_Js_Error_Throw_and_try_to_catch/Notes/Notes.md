### **Lecture Notes: JavaScript Error Handling - `try`, `catch`, `throw`, and `finally`**

---
In this lecture Notes, we will learn how to handle errors in JavaScript using `try`, `catch`, `throw`, and `finally`. This is important for writing clean and reliable code by handling errors instead of letting them break your application.

---

### **1. Why Error Handling is Important:**

When writing programs, sometimes things go wrong. For example:
- Trying to divide by zero.
- Trying to access an undefined variable.
- Trying to read a file that doesn’t exist.

Without handling these errors, the program will stop working. That's where error handling comes in.

---

### **2. Understanding `try`, `catch`, `throw`, and `finally`:**

#### **a) `try` Block:**

- The `try` block is used to write code that might throw an error.  
- The code inside the `try` block is **protected**. If an error occurs, it is caught by the `catch` block.

**Example:**
```javascript
try {
  let result = 10 / 0;  // Trying to divide by zero
  console.log(result);
}
```
- In the above example, dividing by zero will cause an error, and this will be handled later.

---

#### **b) `catch` Block:**

- The `catch` block is used to handle errors that occur in the `try` block.
- If an error occurs inside the `try` block, JavaScript jumps to the `catch` block to handle it.

**Example:**
```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error);  // Handles error
}
```
- If an error happens, the `catch` block will be executed, and it will print "Error occurred: Infinity" (since dividing by zero results in Infinity in JavaScript).

---

#### **c) `throw` Statement:**

- The `throw` statement is used to manually throw an error.  
- You can use `throw` to create custom errors when something goes wrong in your program.

**Example:**
```javascript
try {
  let age = -5;
  if (age < 0) {
    throw "Age cannot be negative!";  // Throwing a custom error
  }
} catch (error) {
  console.log("Caught Error:", error);  // Catches the custom error
}
```
- Here, if the age is negative, a custom error message "Age cannot be negative!" is thrown, and the `catch` block handles it.

---

#### **d) `finally` Block:**

- The `finally` block is always executed, no matter whether an error occurred or not.
- This block is usually used to clean up resources like closing files or connections.

**Example:**
```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error);
} finally {
  console.log("This block always runs.");
}
```
- Here, even if there’s an error, the message `"This block always runs."` will always be printed.

---

### **3. Complete Example with All Blocks:**

```javascript
try {
  let age = -5;  // A negative age to throw error
  if (age < 0) {
    throw "Age cannot be negative!";
  }
  console.log("Your age is:", age);
} catch (error) {
  console.log("Caught Error:", error);  // Catches the custom error
} finally {
  console.log("Thank you for using our system.");
}
```

- **`try`**: Code that may cause an error (negative age in this case).
- **`catch`**: Handles the error and displays it.
- **`finally`**: Displays a final message, no matter what.

---

### **4. Note:**

1. **`try`**: Used to wrap code that may produce an error.
2. **`catch`**: Used to handle the error if one occurs.
3. **`throw`**: Used to throw custom errors in your code.
4. **`finally`**: Always runs after `try` and `catch`, regardless of whether there was an error.

---
