# 📘 Array Destructuring

---

## ✅ What is Destructuring?

Destructuring is a JavaScript expression that allows unpacking values from arrays, or properties from objects, into **distinct variables**.

---

### 🔹 1. Basic Array Destructuring

Extracting values from an array into variables:

```js
const numbers = [23, 56, 89];
const [a, b, c] = numbers;

console.log(a); // 23
console.log(b); // 56
console.log(c); // 89
```

---

### 🔹 2. Skipping Elements in Destructuring

You can skip elements by leaving a blank space between commas:

```js
const numbersWithSkip = [23, 56, 89];
const [p, , r] = numbersWithSkip;

console.log(p); // 23
console.log(r); // 89
```

---

### 🔹 3. Using Rest Operator (`...`) in Destructuring

The rest operator collects the remaining elements into a new array:

```js
const moreNumbers = [23, 56, 89, 50];
const [first, second, ...rest] = moreNumbers;

console.log(first);  // 23
console.log(second); // 56
console.log(rest);   // [89, 50]
```

---

### 🔹 4. Merging Arrays with Spread Operator

Spread operator can merge multiple arrays into one:

```js
const numbers1 = [23, 56, 89, 50];
const numbers2 = [213, 45, 7, 7];

const mergedArray = [...numbers1, ...numbers2];
console.log(mergedArray); 
// [23, 56, 89, 50, 213, 45, 7, 7]
```

---

### 🔹 5. Swapping Values Using Destructuring

Elegant way to swap values of two variables:

```js
let x = 34;
let y = 40;

[x, y] = [y, x];

console.log(x); // 40
console.log(y); // 34
```

---

### 🔹 6. Destructuring Return Values from Function

Perfect when a function returns an array and you want to directly extract elements:

```js
function getCoordinate() {
  return [50, 60];
}

const [coordX, coordY] = getCoordinate();

console.log(coordX); // 50
console.log(coordY); // 60
```

---
