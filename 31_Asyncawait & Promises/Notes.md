## 🧠 JavaScript Promises & Async/Await

---

### 🔹 What is a Promise?
- A way to handle **asynchronous** (delayed) tasks.
- It can be in 3 states:
  1. **Pending** – still waiting  
  2. **Resolved** – successful  
  3. **Rejected** – failed  

---

### 🔹 Creating a Promise

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success!");
  else reject("Error!");
});
```

---

### 🔹 Using `.then()`, `.catch()`, `.finally()`

```javascript
promise
  .then(result => console.log(result))    // if resolved
  .catch(error => console.log(error))     // if rejected
  .finally(() => console.log("Done"));    // always runs
```

---

### 🔹 What is async/await?
- Makes promise code **look simple and clean**.
- `async` → makes a function return a Promise  
- `await` → waits for the Promise to complete  

```javascript
async function getData() {
  let result = await Promise.resolve("Hello!");
  console.log(result);
}
getData();
```

---

### 🔹 Error Handling in async/await

```javascript
async function check(num) {
  try {
    if (num < 0) throw new Error("Negative!");
    console.log(num);
  } catch (err) {
    console.log(err.message);
  }
}
check(-5);
```

---

### 🔹 Fetch API with async/await

```javascript
async function fetchData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data);
}
fetchData();
```

---

### 🔹 Promise Helpers

- `Promise.all()` – Waits for all to finish (fails if one fails)  
- `Promise.allSettled()` – Waits for all, even if some fail  
- `Promise.race()` – Returns the first one to finish  
- `Promise.any()` – Returns the first one that succeeds  

---

### 🔹 Example: Chaining Promises

```javascript
Promise.resolve(2)
  .then(x => x + 3)
  .then(x => x * 2)
  .then(console.log); // Output: 10
```

---

### Note:
- Promises handle **async tasks**
- `then`, `catch`, `finally` = Promise methods  
- `async/await` = cleaner way to write promises  
- Use `try/catch` with `await` to handle errors

---
