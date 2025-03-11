### Lecture Notes: **Introduction to Classes, Getters, Setters, and Private Fields in JavaScript**

In this Notes, we will cover the following concepts in JavaScript:

1. **Classes** and **Constructors**: How to define and create objects from a class.
2. **Getters and Setters**: Accessing and updating object properties in a controlled way.
3. **Private Fields**: Using private fields to protect the internal state of an object.

---

### **1. Introduction to JavaScript Classes**

A **class** in JavaScript is a blueprint for creating objects. It encapsulates both data and behavior, meaning you can define properties (fields) and methods (functions) that work together inside the class.

#### **Basic Class Definition:**

```javascript
class Student {
  constructor(name, age) {
    this.name = name; // Public property
    this.age = age; // Public property
  }

  // Method to display student information
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Displaying student details using the method
st.display(); // Output: Name: Pawan, Age: 25
```

#### **Explanation:**

- The `Student` class has a **constructor** that takes two arguments, `name` and `age`, to initialize the student's details.
- The `display()` method is used to print the student's details.
- When creating a new instance of the `Student` class (i.e., `const st = new Student("Pawan", 25)`), we pass the values `"Pawan"` and `25` to the constructor, which sets the properties `name` and `age` of the object.

---

### **2. Private Fields and Encapsulation**

In real-world applications, you may want to **hide** certain data inside an object and not allow direct access from outside. This is known as **encapsulation**. In JavaScript, we can use **private fields** (denoted by `#`) to store such data. These private fields cannot be accessed directly from outside the class, which helps protect the internal state of the object.

#### **Class with Private Fields:**

```javascript
class Student {
  #name; // private field for name
  #age; // private field for age

  constructor(name, age) {
    this.#name = name; // Initialize private field #name
    this.#age = age; // Initialize private field #age
  }

  // Getter method to access private field #name
  get name() {
    return this.#name;
  }

  // Getter method to access private field #age
  get age() {
    return this.#age;
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Accessing the private fields through getter methods
console.log(st.name); // Output: Pawan
console.log(st.age); // Output: 25
```

#### **Explanation:**

- `#name` and `#age` are private fields in the class. They are not directly accessible from outside the class.
- The getter methods `get name()` and `get age()` allow us to access the private fields from outside the class.
- We can access these private fields indirectly via their getter methods, making it easier to control how the data is accessed.

---

### **3. Getters and Setters**

In JavaScript, **getters** and **setters** allow us to control how properties are accessed and modified. Getters allow us to retrieve the value of a property, while setters allow us to modify the value of a property.

#### **Class with Getter and Setter for Validation:**

```javascript
class Student {
  #name; // private field for name
  #age; // private field for age

  constructor(name, age) {
    this.#name = name; // Initialize private field #name
    this.#age = age; // Initialize private field #age
  }

  // Getter method for 'name'
  get name() {
    return this.#name;
  }

  // Getter method for 'age'
  get age() {
    return this.#age;
  }

  // Setter method for 'name' with validation
  set name(value) {
    if (value.length < 5) {
      console.log("Name must be at least 5 characters long!");
    } else {
      this.#name = value; // Update private field #name if valid
    }
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Trying to set a name that is less than 5 characters long
st.name = "Pa"; // Output: Name must be at least 5 characters long!

// Accessing the updated name using the getter
console.log(st.name); // Output: Pawan
console.log(st.age); // Output: 25
```

#### **Explanation:**

- The setter method `set name(value)` validates the input before updating the `#name` field. If the name is less than 5 characters long, it logs an error message and does not update the name.
- The `get name()` and `get age()` methods are used to access the private fields.
- In the example, we first try to set the name to `"Pa"`, but since it’s shorter than 5 characters, the setter logs a validation message and does not update the name. The name remains `"Pawan"`.

---

### **4. Key Concepts Covered**

1. **Constructor**:

   - A constructor is a special function inside the class that is automatically called when an object is created.
   - It is used to initialize the properties of an object when it is instantiated.

2. **Private Fields (`#`)**:

   - Private fields are properties that cannot be accessed directly from outside the class.
   - They are denoted by a `#` before the property name (e.g., `#name`).
   - This helps encapsulate and protect the internal state of an object.

3. **Getters**:

   - A **getter** is a method that allows you to access the value of a private field.
   - It works like a property but provides controlled access to private data.

4. **Setters**:

   - A **setter** is a method that allows you to modify the value of a private field.
   - Setters often include validation or other logic before updating the value.

5. **Encapsulation**:
   - **Encapsulation** is a core principle of object-oriented programming (OOP) that hides the internal details of an object and only exposes a controlled interface for interaction.
   - Using private fields and getters/setters helps achieve encapsulation.

---

### **5. Practice Exercise for Students**

1. **Create a `Student` class**:

   - Create a `Student` class with private fields for `name`, `age`, and `grade`.
   - Add getter and setter methods for all fields.
   - Validate that the `grade` is between 0 and 100 before setting it.

2. **Add a `displayDetails()` method**:
   - Add a method `displayDetails()` that prints the student's name, age, and grade.
   - Make sure the `grade` is validated before updating it with the setter.

---

### **Note:**

In this Notes, we covered the basics of **classes** in JavaScript, including how to use **private fields** to protect the internal state of an object, and how **getters and setters** provide a controlled way to access and modify properties. This helps us write cleaner, more maintainable, and secure code.

Remember:

- Use **getters** to safely access private data.
- Use **setters** to validate and modify private data.
- **Private fields** help you encapsulate the internal state of objects to prevent unauthorized access and modification.
