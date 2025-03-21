### **Callback in JavaScript**

- A **callback** is a function that is passed as an argument to another function and is executed after that function completes its task.

#### Example of a callback:

```javascript
function greet(name, callback) {
  console.log(`Hi, I am ${name}`);
  // Calling the callback function after greeting
  callback();
}

function say() {
  console.log("How are you?");
}

// Pass the 'say' function as a callback to the 'greet' function
greet("Pawan", say);
```

**Explanation**:

- The `greet` function takes two parameters: `name` (a string) and `callback` (a function).
- After greeting, the `callback()` function is called. In this case, the callback is the `say` function that prints "How are you?".

---

### **Some other built-in examples of callbacks**:

1. **`setInterval()`**

   - Calls a function repeatedly with a fixed time delay between each call.
   - **Example**:
     ```javascript
     setInterval(() => {
       console.log("This message repeats every 2 seconds.");
     }, 2000); // 2000 milliseconds = 2 seconds
     ```

2. **`reduce()`**

   - A method for accumulating a single value (e.g., sum, product, etc.) from an array using a callback.
   - **Example**:
     ```javascript
     const numbers = [1, 2, 3, 4];
     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
     console.log(sum); // Output: 10
     ```

3. **`setTimeout()`**
   - Calls a function after a specified time delay.
   - **Example**:
     ```javascript
     setTimeout(() => {
       console.log("This message shows up after 3 seconds.");
     }, 3000); // 3000 milliseconds = 3 seconds
     ```

---
