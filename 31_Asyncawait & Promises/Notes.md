### Lecture Notes: JavaScript Promises and Async/Await~
---

#### **Introduction to Promises**

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to handle asynchronous code in a more manageable and readable way.

- **State of a Promise**: A Promise can be in one of three states:
  1. **Pending**: The promise is still being executed.
  2. **Resolved** (Fulfilled): The promise has completed successfully, and the result is available.
  3. **Rejected**: The promise has failed, and an error is returned.

```javascript
let myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    let success = true; // Change this to false to see the rejected state
    if(success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});
```

---

#### **Creating Promises**

A Promise is created using the `new Promise()` constructor. It takes a function (called an executor function) that has two parameters:
- `resolve`: A function called when the promise is successfully completed.
- `reject`: A function called when the promise encounters an error.

**Example:**

```javascript
let myPromise = new Promise((resolve, reject) => {
    let number = 10;
    if (number % 2 === 0) {
        resolve("The number is even!");
    } else {
        reject(new Error("The number is odd!"));
    }
});
```

---

#### **Consuming Promises**

Once a Promise is created, you can consume it using `.then()`, `.catch()`, and `.finally()` methods:

1. **`.then()`**: Handles the resolved value.
2. **`.catch()`**: Handles errors or rejection.
3. **`.finally()`**: Runs after the promise is settled (whether resolved or rejected).

```javascript
myPromise
    .then((message) => console.log(message)) // Called if resolved
    .catch((error) => console.error(error.message)) // Called if rejected
    .finally(() => console.log("Promise has been handled"));
```

---

#### **Async/Await**

`async` and `await` are syntactic sugar built on top of Promises. They make asynchronous code look and behave more like synchronous code.

- **`async`**: Used to declare a function as asynchronous. It always returns a Promise.
- **`await`**: Used inside an `async` function to pause execution until the Promise is resolved.

**Basic Example:**

```javascript
// Function that returns a promise
async function myRequest() {
    return "Hello, World!";
}

myRequest().then(result => console.log(result)); // "Hello, World!"
```

---

#### **Returning Values from Async Functions**

An `async` function always returns a Promise, even if it doesn't explicitly return one. If an `async` function returns a non-promise value, it is automatically wrapped in a Promise.

**Example:**

```javascript
async function myRequest() {
    return "This will be wrapped in a Promise";
}

myRequest().then(result => console.log(result)); // "This will be wrapped in a Promise"
```

---

#### **Error Handling with Async/Await**

`async/await` provides a cleaner and more readable way to handle errors compared to traditional `.catch()` in Promises. Use `try/catch` to handle errors.

**Example:**

```javascript
async function myRequest(num) {
    try {
        if (num < 0) {
            throw new Error("Negative number error!");
        }
        return num;
    } catch (error) {
        console.log(error.message);
    }
}

myRequest(-5); // Outputs: Negative number error!
```

---

#### **Fetching Data with Async/Await**

The `fetch()` API returns a Promise and can be used with `async/await` to handle asynchronous HTTP requests.

**Example:**

```javascript
async function fetchData() {
    console.log("Fetching data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}

fetchData();
```

---

#### **Working with Multiple Promises**

JavaScript provides several methods for handling multiple promises simultaneously:

1. **`Promise.all()`**: Resolves when all promises are resolved, and returns an array of results.
2. **`Promise.allSettled()`**: Resolves when all promises are settled (either resolved or rejected).
3. **`Promise.race()`**: Resolves as soon as one of the promises resolves or rejects.
4. **`Promise.any()`**: Resolves as soon as one of the promises resolves, but ignores rejections.

**Example of `Promise.all()`:**

```javascript
Promise.all([
  Promise.resolve("Task 1 completed"),
  Promise.resolve("Task 2 completed"),
  Promise.reject("Task 3 failed")
])
    .then(results => console.log(results)) // If all promises resolve
    .catch(error => console.error(error)); // If any promise rejects
```

---

#### **Using `Promise.allSettled()`**

`Promise.allSettled()` returns a list of results with each promise's status (either "fulfilled" or "rejected"), even if some promises are rejected.

**Example:**

```javascript
Promise.allSettled([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed")
])
    .then(results => console.log(results));
```

Output:
```json
[
  { status: "fulfilled", value: "Task 1 completed" },
  { status: "rejected", reason: "Task 2 failed" },
  { status: "fulfilled", value: "Task 3 completed" }
]
```

---

#### **Using `Promise.race()`**

`Promise.race()` resolves as soon as one of the promises is settled, and it returns the result of that promise.

**Example:**

```javascript
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500)),
])
    .then(result => console.log(result)); // "Task 2 finished"
```

---

#### **Using `Promise.any()`**

`Promise.any()` resolves when the first promise resolves, and ignores all rejections.

**Example:**

```javascript
Promise.any([
  Promise.reject("Task 1 failed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed")
])
    .then(result => console.log(result)); // "Task 3 completed"
```

---

#### **Immediate Resolutions**

You can create an immediately resolved or rejected Promise using `Promise.resolve()` and `Promise.reject()`.

**Example of `Promise.resolve()`:**

```javascript
Promise.resolve("Immediate success")
    .then((result) => console.log(result)); // "Immediate success"
```

**Example of `Promise.reject()`:**

```javascript
Promise.reject("Immediate failure")
    .catch((error) => console.error(error)); // "Immediate failure"
```

---

#### **Chaining Promises**

Promises can be chained using `.then()` to sequentially execute asynchronous operations.

**Example of chaining promises:**

```javascript
Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13
```

---

#### **Cleanup with `.finally()`**

`.finally()` executes code after the Promise is settled, regardless of whether it was resolved or rejected.

**Example:**

```javascript
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));
```

---

### **Note:**
1. **Promises**: Allow handling of asynchronous operations by resolving or rejecting with values.
2. **Async/Await**: Syntactic sugar over promises to make asynchronous code appear synchronous.
3. **Promise Methods**: `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, `Promise.any()` for handling multiple promises.
4. **Error Handling**: Use `try/catch` in `async/await` or `.catch()` in Promises.
5. **Chaining and Cleanup**: Chain operations with `.then()` and perform cleanup with `.finally()`.

---

### **Further Reading**
For more detailed information about Promises, you can refer to the following resource:
- [GeeksforGeeks - JavaScript Promises](https://www.geeksforgeeks.org/javascript-promise/)

--- 
