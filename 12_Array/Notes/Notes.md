# **Lecture Notes: JavaScript Array Methods**  

## **Introduction to Arrays in JavaScript**  
An **array** is a data structure that stores multiple values in a single variable. Arrays are useful when working with lists of data, such as a collection of numbers, names, or objects.

### **Declaring an Array**
We can create an array using square brackets `[]` and assigning values inside it.

```javascript
// Creating an empty array
let arr = [];
console.log(arr); // Output: []
```

We can also create an array with elements:

```javascript
let arr = [10, 29, 37];
console.log(arr); // Output: [10, 29, 37]

let arr2 = [10, 29, 37, 90.7, "Pawan", true, 'a'];
console.log(arr2); // Output: [10, 29, 37, 90.7, "Pawan", true, 'a']
```
JavaScript arrays can hold different types of data including numbers, strings, booleans, and objects.

---

## **Basic Array Methods**
JavaScript provides several built-in methods to manipulate arrays. Below are some important ones:

### **1. push() - Adding Elements to the End**
The `push()` method adds one or more elements to the **end** of an array.

```javascript
let arr = [];
arr.push(10);
console.log(arr); // Output: [10]

arr.push(20, 30, 40, 50);
console.log(arr); // Output: [10, 20, 30, 40, 50]
```

---

### **2. pop() - Removing the Last Element**
The `pop()` method removes and returns the last element of an array.

```javascript
console.log(`Deleted element: ${arr.pop()}`); // Output: Deleted element: 50
console.log(arr); // Output: [10, 20, 30, 40]
```
- It removes only **one element at a time**.
- If the array is empty, it returns `undefined`.

---

### **3. shift() - Removing the First Element**
The `shift()` method removes the **first** element from an array and returns it.

```javascript
console.log("Removed element:", arr.shift()); // Output: Removed element: 10
console.log(arr); // Output: [20, 30, 40]
```

---

### **4. unshift() - Adding Elements to the Beginning**
The `unshift()` method adds one or more elements at the **beginning** of an array.

```javascript
arr.unshift(100, 200, 300);
console.log(arr); // Output: [100, 200, 300, 20, 30, 40]
```

---

### **5. splice() - Modifying an Array**
The `splice()` method allows adding, removing, or replacing elements at a specific index.

#### **Syntax**
```javascript
arr.splice(startIndex, deleteCount, item1, item2, ...);
```

#### **Example:**
```javascript
// Removing 2 elements from index 2 and adding new ones
arr.splice(2, 2, 11, 23, 45, 77);
console.log(arr); // Output: [100, 200, 11, 23, 45, 77, 30, 40]
```
- **First parameter (`startIndex`)**: The index where changes begin.
- **Second parameter (`deleteCount`)**: Number of elements to remove.
- **Additional parameters**: New elements to be inserted at `startIndex`.

---

### **6. slice() - Extracting Part of an Array**
The `slice()` method extracts a portion of an array **without modifying the original array**.

#### **Syntax**
```javascript
arr.slice(startIndex, endIndex);
```
- It returns elements from `startIndex` to `endIndex - 1`.

#### **Example:**
```javascript
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [200, 11, 23]
```

---

### **7. at() - Accessing Elements Using Index**
The `at()` method allows retrieving elements by index, including **negative indexes**.

```javascript
console.log(arr.at(2));  // Output: 11
console.log(arr.at(-1)); // Output: 40 (last element)
```

---

### **8. indexOf() - Finding the Index of an Element**
The `indexOf()` method returns the **first index** of an element. If not found, it returns `-1`.

```javascript
console.log(arr.indexOf(11)); // Output: 2
console.log(arr.indexOf(99)); // Output: -1 (not found)
```

---

### **9. length - Finding the Array Length**
The `length` property returns the **total number of elements** in an array.

```javascript
console.log(arr.length); // Output: 8
```

---

### **10. includes() - Checking if an Element Exists**
The `includes()` method checks whether an array contains a specific element.

```javascript
console.log(arr.includes(200)); // Output: true
console.log(arr.includes(99));  // Output: false
```

---

### **11. filter() - Filtering Elements**
The `filter()` method creates a **new array** containing elements that meet a specific condition.

#### **Example: Get all even numbers**
```javascript
let evenNumbers = arr.filter((item) => item % 2 === 0);
console.log("Even Numbers:", evenNumbers);
```

---

### **12. forEach() - Iterating Over an Array**
The `forEach()` method executes a provided function **once for each array element**.

#### **Example: Print all elements**
```javascript
arr.forEach((item) => console.log(item));
```

---

### **13. map() - Creating a New Array**
The `map()` method creates a **new array** by applying a function to each element.

#### **Example: Square each element**
```javascript
let squaredNumbers = arr.map((item) => item * item);
console.log("Squared Numbers:", squaredNumbers);
```

---

### **14. reduce() - Reducing an Array to a Single Value**
The `reduce()` method applies a function to accumulate values into a **single result**.

#### **Example: Sum of all elements**
```javascript
let sum = arr.reduce((acc, item) => acc + item, 0);
console.log("Sum of array elements:", sum);
```
- `acc` (accumulator) stores the result.
- The second argument `0` is the **initial value**.

---

## **Summary of Array Methods**
| Method     | Purpose |
|------------|---------|
| `push()`   | Add elements at the end |
| `pop()`    | Remove the last element |
| `shift()`  | Remove the first element |
| `unshift()` | Add elements at the beginning |
| `splice()` | Add, remove, or replace elements |
| `slice()`  | Extracts a portion of the array |
| `at()` | Access elements using index |
| `indexOf()` | Finds the index of an element |
| `length` | Returns the array length |
| `includes()` | Checks if an element exists |
| `filter()` | Filters elements based on a condition |
| `forEach()` | Iterates over elements |
| `map()` | Creates a new array based on a function |
| `reduce()` | Reduces elements to a single value |

---

## **Note:**
- Arrays are **flexible** and **powerful** in JavaScript.
- Methods like `push()`, `pop()`, `splice()`, and `slice()` allow easy manipulation.
- `map()`, `filter()`, and `reduce()` help in processing data efficiently.
- Understanding these methods helps in writing **cleaner, more efficient** JavaScript code.

---
