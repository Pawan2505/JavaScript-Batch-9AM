# 📘 Spread Operator, Array & Object Operations

---

## 🔹 Spread Operator (`...`)
The spread operator allows an iterable (like an array or object) to be expanded in places where zero or more arguments or elements are expected.

---

## Arrays

### ✅ 1. Copying an Array
```js
let arr = [1, 2, 3, 4, 5];
let newArray = [...arr];
console.log(newArray); 
// Output: [1, 2, 3, 4, 5]
```

---

### ✅ 2. Adding New Elements
```js
let newArray = [...arr, "Pawan"];
console.log(newArray); 
// Output: [1, 2, 3, 4, 5, "Pawan"]

let newArray2 = [true, ...arr, "Pawan"];
console.log(newArray2); 
// Output: [true, 1, 2, 3, 4, 5, "Pawan"]

arr = [...arr, "Pawan"];
console.log(arr); 
// Output: [1, 2, 3, 4, 5, "Pawan"]
```

---

### ✅ 3. Merging Two Arrays
```js
const numbers1 = [23, 56, 89, 50];
const numbers2 = [213, 45, 7, 7];

let mergedArray = [...numbers1, ...numbers2];
console.log(mergedArray); 
// Output: [23, 56, 89, 50, 213, 45, 7, 7]
```

---

## Objects

### ✅ 4. Copying an Object
```js
const obj1 = { id: 1, name: "Sejal" };
const obj2 = { ...obj1 };
console.log(obj2); 
// Output: { id: 1, name: "Sejal" }
```

---

### ✅ 5. Merging Two Objects
```js
let obj1 = { name: "Dhruv", salary: 10000000000 };
const obj2 = { id: 1, name: "Nency" };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); 
// Output: { name: "Nency", salary: 10000000000, id: 1 }
```

📝 **Note:** Properties in `obj2` will overwrite those in `obj1` if the keys are the same.

---

### ✅ 6. Updating Object Properties
```js
obj1 = { ...obj1, salary: 10000 };
console.log(obj1); 
// Output: { name: "Dhruv", salary: 10000 }
```

---

### ✅ 7. Adding New Properties to Object
```js
obj1 = { id: 1, ...obj1, address: "Gujrat" };
console.log(obj1); 
// Output: { id: 1, name: "Dhruv", salary: 10000, address: "Gujrat" }
```

---
