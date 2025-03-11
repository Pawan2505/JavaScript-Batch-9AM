### Lecture Notes: **Understanding Object Property Access in JavaScript**

---

In this Notes, we'll explore how JavaScript functions can be used to create objects, how to manage properties with closures, and how to utilize `Object.defineProperty()` for more control over property access.

---

### **1. Basic Constructor Function**

A **constructor function** in JavaScript is used to create and initialize objects. In the example below, the `Student` function creates a `Student` object with a `name` property and a `display` method.

#### **Code:**

**File: `studentConstructor.js`**

```javascript
// Constructor function to create a Student object
function Student(name) {
  this.name = name; // 'name' property is assigned

  // 'display' method to log student details
  this.display = function () {
    console.log(`Name: ${name}`);
  };
}

// Create a new Student object
const st = new Student("Pawan");

// Call the display method to show student's name
st.display(); // Output: Name: Pawan
```

#### **Explanation:**

- `Student` is a constructor function.
- The `this.name` inside the constructor initializes the `name` property for every new instance.
- The `display()` method logs the student's name to the console.

---

### **2. Simple Object Creation Using a Constructor**

In this version, we focus on creating a basic object and directly accessing the `name` property.

#### **Code:**

**File: `studentBasic.js`**

```javascript
// Constructor function to create a Student object
function Student(name) {
  this.name = name; // 'name' property is assigned directly
}

// Create a new Student object
const st = new Student("Pawan");

// Access and log the name property
console.log(st.name); // Output: Pawan
```

#### **Explanation:**

- We create a `Student` instance where the `name` is set directly through the constructor.
- After creating the `st` object, we can access `st.name` directly and log it.

---

### **3. Using Getter and Setter with `Object.defineProperty()`**

In this version, we use `Object.defineProperty()` to create getter and setter functions for the `name` property. This approach allows us to define custom behaviors when getting or setting a property.

#### **Code:**

**File: `studentGetterSetter.js`**

```javascript
// Constructor function to create a Student object
function Student(name) {
  this._name = name; // Internal private field (underscore convention)

  // Using Object.defineProperty to define getter and setter for 'name'
  Object.defineProperty(this, "name", {
    get: function () {
      return this._name; // Getter for 'name'
    },

    set: function (value) {
      this._name = value; // Setter for 'name'
    },
  });
}

// Create a new Student object
const st = new Student("Pawan");

// Access the name using the getter
console.log(st.name); // Output: Pawan

// Direct access to the private '_name' property is not possible anymore
// console.log(st._name);  // This would throw an error, '_name' is not directly accessible
```

#### **Explanation:**

- `Object.defineProperty()` allows us to add getter and setter for the `name` property.
- The `get` function is called when the `name` property is accessed.
- The `set` function is called when a value is assigned to `name`.
- `this._name` is still used as the internal private field, but we interact with `name` through the getter and setter.

---

### **4. Private Variables Using Closures**

Here we demonstrate how to create truly **private variables** by using closures. This approach ensures that the internal state of the object cannot be accessed directly.

#### **Code:**

**File: `studentPrivate.js`**

```javascript
// Constructor function with closures to create private variables
function Student(name) {
  let _name = name; // _name is a private variable

  // Using Object.defineProperty to define getter and setter for 'name'
  Object.defineProperty(this, "name", {
    get: function () {
      return _name; // Getter for 'name' accesses the private _name variable
    },

    set: function (value) {
      _name = value; // Setter for 'name' modifies the private _name variable
    },
  });
}

// Create a new Student object
const st = new Student("Pawan");

// Access the name using the getter
console.log(st.name); // Output: Pawan

// _name is now private and cannot be accessed directly
// console.log(st._name);  // This will throw an error, '_name' is not accessible directly
```

#### **Explanation:**

- `let _name = name;` defines a private variable within the `Student` constructor. This variable is not accessible from outside the function.
- `Object.defineProperty()` is used to expose a getter and setter for `name` while keeping `_name` private.
- The `name` property can be accessed or modified through the getter and setter, but the `_name` variable is hidden and cannot be accessed directly from outside the object.

---

### **Key Concepts Covered**

1. **Constructor Functions:**

   - Constructor functions in JavaScript are used to create new objects. They allow you to initialize object properties when the object is created.
   - We use `this` inside a constructor function to assign properties to the object being created.

2. **Encapsulation:**

   - **Encapsulation** is a concept in OOP where we hide the internal details of an object. In JavaScript, we can achieve this by using closures or private fields (denoted by `#` in ES2022).
   - This ensures that internal state or private data is not accessible directly from outside the object, providing better control over the data.

3. **Getters and Setters:**

   - **Getters** allow us to access private properties in a controlled way.
   - **Setters** allow us to modify private properties with validation or additional logic.
   - `Object.defineProperty()` can be used to create getters and setters.

4. **Private Variables Using Closures:**
   - A closure is a function that remembers its lexical scope even when the function is executed outside that scope. In this example, the `_name` variable is kept private using closures.
   - This approach ensures that private variables are not accessible from outside the constructor function.

---

### **Practice Exercises for Students**

1. **Creating a Student Class with Private Fields:**

   - Create a `Student` class with a private field `#age` and use a getter to access it and a setter to modify it.
   - Add validation in the setter to ensure the age is a positive number.

2. **Encapsulate and Validate Name Change:**

   - Modify the previous example to add validation in the setter for the `name` property. Ensure the name is at least 5 characters long before setting it.

3. **Implement a Display Method:**
   - Add a `display` method to the `Student` class that prints both the name and age of the student using the getter methods.

---

### **Note:**

In this Notes, we learned how to create objects in JavaScript using constructor functions, and how to manage object properties using **getters**, **setters**, and **private fields**. These concepts help us achieve **encapsulation** and create more robust and maintainable code. By controlling access to properties and hiding internal data, we can ensure that objects behave predictably and consistently.
