### Lecture Notes on **Encapsulation in JavaScript**

In this Notes, we will learn about **Encapsulation** in JavaScript, a key concept of Object-Oriented Programming (OOP). We will also discuss **getters** and **setters**, which are used to implement encapsulation. 

Understand how encapsulation helps protect the internal state of an object and how we can use getters and setters to control access to it.

---

### **What is Encapsulation?**

**Encapsulation** is one of the four fundamental principles of Object-Oriented Programming (OOP). It is the concept of **hiding** the internal details of an object and exposing only the necessary information to the outside world. In other words, it’s the practice of bundling data (variables) and methods (functions) that operate on the data into a single unit or class.

In JavaScript, encapsulation helps to:
- **Control access** to the internal state of an object.
- **Protect** the internal properties of an object from being modified directly.
- **Ensure** that only valid data is stored in the object.

### **Key Concepts in Encapsulation:**
1. **Private Variables**: These are variables that are not directly accessible from outside the class. They can only be accessed and modified through methods provided by the class (such as getters and setters).
2. **Public Methods**: These are methods that are accessible from outside the class. They often provide controlled access to the private variables.

---

### **How is Encapsulation Implemented in JavaScript?**

JavaScript doesn't directly support private variables in the way that languages like Java or C++ do. However, **encapsulation** can still be achieved using the following techniques:

1. **Using private fields** (using `#` syntax in modern JavaScript).
2. **Using closures** to create private variables.
3. **Using getters and setters** to control access to the properties.

---

### **Getters and Setters in Encapsulation**

**Getters** and **setters** are special methods that allow controlled access to an object's properties. They are part of encapsulation because they allow an object to protect its internal state and prevent direct manipulation of its properties.

- **Getter**: A method used to access the value of an object’s property.
- **Setter**: A method used to set or modify the value of an object’s property.

---

### **Why Use Getters and Setters?**

1. **Validation**: Setters allow us to validate values before assigning them to properties.
2. **Control**: We can define exactly how data is accessed or modified. For example, a setter can ensure that a property can only be set to a certain type or value.
3. **Hide Complexity**: Getters can help expose complex computations as simple property accesses.
4. **Encapsulation**: By using getters and setters, we can hide the internal representation of an object’s data.

---

### **Example of Encapsulation with Getters and Setters**

In the following example, we will create a `Person` class that encapsulates a person's `age` and `name`. We will use getters and setters to control access to these properties.

#### Code Example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;  // Public property
        this._age = age;   // Private property (using underscore convention)
    }

    // Getter for the name property
    get name() {
        return this._name.toUpperCase();  // Converts name to uppercase when accessed
    }

    // Setter for the name property
    set name(value) {
        if (value.length < 3) {
            console.log("Name must be at least 3 characters long.");
        } else {
            this._name = value;  // Sets the name value
        }
    }

    // Getter for the age property
    get age() {
        return this._age;  // Returns the age
    }

    // Setter for the age property
    set age(value) {
        if (value < 0) {
            console.log("Age must be a positive number.");
        } else {
            this._age = value;  // Sets the age value if valid
        }
    }
}

// Create an instance of Person
const person1 = new Person("John", 25);

// Accessing the properties using getters
console.log(person1.name);  // Output: "JOHN"
console.log(person1.age);   // Output: 25

// Trying to update properties using setters
person1.name = "Jo";  // Output: "Name must be at least 3 characters long."
person1.age = -5;     // Output: "Age must be a positive number."

// Accessing updated properties
console.log(person1.name);  // Output: "JOHN"
console.log(person1.age);   // Output: 25
```

#### Explanation:
1. **Constructor**:
   - The constructor initializes the `name` and `_age` properties.
   - The `_age` property is considered "private" by convention, meaning it's not meant to be accessed directly from outside the class.

2. **Getter for `name`**:
   - The getter method converts the name to uppercase before returning it. This ensures that the name is always accessed in uppercase.

3. **Setter for `name`**:
   - The setter checks if the provided name is at least 3 characters long. If it's not, an error message is displayed; otherwise, the name is updated.

4. **Getter for `age`**:
   - The getter method simply returns the value of `_age`.

5. **Setter for `age`**:
   - The setter checks if the provided age is a positive number. If it is, the age is updated; otherwise, an error message is displayed.

---

### **Private Fields in Modern JavaScript**

Starting with ECMAScript 2022, JavaScript now supports **private fields** in classes, which can be used to achieve encapsulation more effectively. These fields are only accessible within the class and cannot be accessed from outside the class.

We can define private fields using the `#` symbol:

#### Code Example with Private Fields:

```javascript
class Person {
    #name;  // Private field
    #age;   // Private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Getter for the name
    get name() {
        return this.#name.toUpperCase();  // Name is always returned in uppercase
    }

    // Setter for the name
    set name(value) {
        if (value.length < 3) {
            console.log("Name must be at least 3 characters long.");
        } else {
            this.#name = value;
        }
    }

    // Getter for the age
    get age() {
        return this.#age;
    }

    // Setter for the age
    set age(value) {
        if (value < 0) {
            console.log("Age must be a positive number.");
        } else {
            this.#age = value;
        }
    }
}

// Creating an instance of Person
const person2 = new Person("Alice", 30);

// Accessing properties using getters
console.log(person2.name);  // Output: "ALICE"
console.log(person2.age);   // Output: 30

// Attempting to access private fields (will result in an error)
console.log(person2.#name);  // Error: Private field '#name' must be declared in an enclosing class
```

#### Explanation:
- The `#name` and `#age` are **private fields**. These fields cannot be accessed directly from outside the class.
- The **getters** and **setters** are still used to control access to these fields.
- If you attempt to access `person2.#name` from outside the class, JavaScript will throw an error.

---

### **Benefits of Encapsulation**:

1. **Data Protection**: By using private variables, encapsulation prevents the internal state of an object from being modified directly, reducing the risk of errors or bugs.
2. **Validation**: Setters can validate data before modifying object properties, ensuring that only valid values are assigned.
3. **Simplified Interface**: By using getters and setters, the internal implementation of the object can be hidden from the user. The user only interacts with the public interface (methods).
4. **Code Maintainability**: Encapsulation improves code maintainability because the internal implementation can change without affecting the external interface.

---
