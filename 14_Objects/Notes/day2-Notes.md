### **Lecture Notes: Working with Arrays and Objects in JavaScript**

In JavaScript, **Arrays** and **Objects** are two important data structures that help us store and manipulate data efficiently.

---

#### **1. Arrays in JavaScript**

An **Array** is a collection of items, where each item can be of any type like numbers, strings, or even other arrays. Arrays are represented using square brackets `[ ]`.

##### **Example:**
```javascript
let student = [
  { name: "vishwa", salary: 0 },
  { name: "vatsal" },
  { name: "poojan", salary: 1 },
  { name: "jaimin", salary: 10000 },
  { name: "mastur", salary: -17 }
];
```
In the above example, we have an array called `student` which contains multiple objects. Each object represents a student with properties like `name` and sometimes `salary`.

---

#### **2. Looping through Arrays**

To work with each item in an array, we use loops. There are different types of loops available in JavaScript.

- **`forEach` loop**: This loop goes through every element in the array and performs an operation on each element.

  ```javascript
  student.forEach((item) => console.log(item));
  ```

- **`for...of` loop**: This loop is used to get each element of the array one by one.

  ```javascript
  for (let item of student) {
    console.log(item);
  }
  ```

- **`for...in` loop**: This loop is used to get the index of each item in the array. It's not commonly used, but it's good for accessing indices.

  ```javascript
  for (let index in student) {
    console.log(student[index]);
  }
  ```

---

#### **3. Working with Objects**

In JavaScript, **Objects** are used to store data in the form of key-value pairs. Each object has properties (keys) and corresponding values.

##### **Example:**
```javascript
const person = {
  name: "Pawan", // Property: name
  age: 24,       // Property: age
  id: 11          // Property: id
};
```

To work with the properties of objects, we can use various methods like:

- **`Object.keys()`**: This method returns an array of all the keys (property names) of the object.

  ```javascript
  console.log(Object.keys(person)); // ["name", "age", "id"]
  ```

- **`Object.values()`**: This method returns an array of the values of the properties.

  ```javascript
  console.log(Object.values(person)); // ["Pawan", 24, 11]
  ```

- **`Object.entries()`**: This method returns an array of key-value pairs.

  ```javascript
  console.log(Object.entries(person)); // [["name", "Pawan"], ["age", 24], ["id", 11]]
  ```

---

#### **4. Creating Objects using `Object.create()`**

The `Object.create()` method is used to create a new object that inherits properties from another object. 

##### **Example:**
```javascript
let arr = Object.create(person);
arr.name = "Pawan";
arr.sn = 123;

console.log(person); // Original object
console.log(arr);    // New object
```
Here, `arr` is created from `person`, but we can add new properties to `arr` as well.

---

#### **5. Merging Objects using `Object.assign()`**

The `Object.assign()` method is used to merge properties from one object into another. It copies the properties from one or more objects to a target object.

##### **Example:**
```javascript
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = { firstName: "Anne", lastName: "Smith" };

Object.assign(person1, person2);

console.log(person1); // person1 is now updated with values from person2
console.log(person2); // person2 remains unchanged
```

---

#### **6. Using Array Methods: `map()`, `find()`, and `filter()`**

These are useful methods that help manipulate and search arrays easily:

- **`map()`**: This method creates a new array by applying a function to each element.

  ```javascript
  const names = student.map((s) => s.salary);
  console.log(names); // [0, undefined, 1, 10000, -17]
  ```

- **`find()`**: This method searches for the first element in the array that satisfies a given condition.

  ```javascript
  let value = student.find((s) => s.name == "Kunal");
  console.log(value); // undefined if no match is found
  ```

- **`filter()`**: This method creates a new array with all elements that satisfy a specific condition.

  ```javascript
  let values = student.filter((s) => s.name == "unal");
  console.log(values); // [{name: "unal", age: 22}, {name: "unal", age: 21}]
  ```

---

#### **7. Grouping Data Based on Conditions**

Sometimes, we need to group data based on a condition. We can use functions to do this, like grouping fruits based on their quantity.

##### **Example:**
```javascript
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruits, myCallback);
```
In the above example, fruits are grouped into two categories: "ok" for fruits with a quantity greater than 200, and "low" for those with a quantity less than or equal to 200.

---

#### **8. Displaying Grouped Data**

Once the data is grouped, we can display it using loops:

##### **Displaying "ok" fruits:**
```javascript
let text = "These fruits are Ok: <br>";
for (let [x, y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
console.log(text);
```

##### **Displaying "low" fruits:**
```javascript
text += "<br>These fruits are low: <br>";
for (let [x, y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
console.log(text);
```

---

#### **Complete Code Example**

Here is the complete code that shows how to work with arrays and objects, and group them based on a condition:

```javascript
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(fruits, myCallback);

let text = "These fruits are Ok: <br>";
for (let [x, y] of result.ok.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
console.log(text);

text += "<br>These fruits are low: <br>";
for (let [x, y] of result.low.entries()) {
  text += y.name + " " + y.quantity + "<br>";
}
console.log(text);
```

### **Expected Output:**

When you run this code, the output will look something like this:

```
These fruits are Ok: 
apples 300
bananas 500

These fruits are low: 
oranges 200
kiwi 150
```

- **"Ok" fruits**: Fruits with quantities greater than 200.
- **"Low" fruits**: Fruits with quantities less than or equal to 200.

---

### **Note:**

- **Arrays** store lists of items, and **Objects** store data in key-value pairs.
- We can loop through arrays using various loops like `forEach`, `for...of`, and `for...in`.
- **Object methods** like `Object.keys()`, `Object.values()`, and `Object.entries()` help us work with object properties.
- **Merging objects** is done using `Object.assign()`.
- **Array methods** like `map()`, `find()`, and `filter()` help manipulate and search data in arrays.
- We can **group data** based on conditions and display the results using loops.
