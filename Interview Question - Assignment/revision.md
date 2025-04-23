### **1. Check if a variable is an array**

```javascript
// Example 1: Variable is not an array
let a = 10;
console.log(Array.isArray(a));  // false

// Example 2: Checking an actual array
let fruits = ["apple", "banana", "mango"];
if (Array.isArray(fruits)) {
  console.log("Yes, it's an array.");
} else {
  console.log("No, it's not an array.");
}
```

---

### **2. Spread Operator vs Rest Parameter**

#### 🔹 Spread Operator: Expands elements

```javascript
let numbers = [1, 2, 3];
console.log(...numbers);  // Output: 1 2 3

let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];     // Merge arrays
console.log(c);           // Output: [1, 2, 3, 4]
```

#### 🔹 Rest Parameter: Collects arguments

```javascript
function sum(...args) {
  console.log(args);                    // Output: [10, 20, 30]
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30));           // Output: 60
```

---

### **3. What is NaN in JavaScript?**

```javascript
// Invalid math operation
let result = 0 / 0;
console.log(result);  // NaN

// Trying to multiply a string
let a = "hello" * 5;
console.log(a);       // NaN

// Converting non-numeric string to number
let b = Number("Red & White");
console.log(b);       // NaN

// Check if a value is NaN
let x = NaN;
console.log(isNaN(x)); // true
```

---

### **4. Clone an array in JavaScript**

#### 🔹 Using `slice()`
```javascript
let original = [1, 2, 3];
let copy = original.slice();   // Cloned
console.log(copy);             // [1, 2, 3]
```

#### 🔹 Using spread operator `[...array]`
```javascript
let original = [4, 5, 6];
let copy = [...original];
console.log(copy);             // [4, 5, 6]
```

#### 🔹 Using `concat()`
```javascript
let original = [7, 8, 9];
let copy = [].concat(original);
console.log(copy);             // [7, 8, 9]
```

#### 🔹 Using `Array.from()`
```javascript
let original = [10, 11, 12];
let copy = Array.from(original);
console.log(copy);             // [10, 11, 12]
```

#### Not cloning (just reference copy)
```javascript
let a = [1, 2, 3];
let b = a; // Not a clone
console.log(b);  // [1, 2, 3]
```
