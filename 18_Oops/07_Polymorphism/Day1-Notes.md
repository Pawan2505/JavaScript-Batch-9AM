### **Polymorphism in JavaScript**

#### **What is Polymorphism?**
Polymorphism is a fundamental concept in object-oriented programming (OOP), which allows different objects to respond to the same method in different ways. In simple terms, polymorphism means **"many forms"**.

There are two types of polymorphism:

1. **Compile-time Polymorphism (Method Overloading)**: This is when multiple methods have the same name but differ in the number or type of parameters. JavaScript does not support traditional method overloading as some other languages do (e.g., Java or C++). However, we can simulate it in JavaScript using argument handling in methods.

2. **Run-time Polymorphism (Method Overriding)**: This occurs when a subclass provides a specific implementation for a method that is already defined in the parent class. This is also known as **method overriding**.

---

### **Code Example for Polymorphism (Method Overriding)**

```javascript
// Base class representing a Student
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the student's details (general method)
  display() {
    console.log("Hello");
  }
}

// Derived class Dhauv which extends Student
class Dhauv extends Student {
  constructor(name, age, id) {
    super(name, age);  // Calling the parent class constructor
    this.id = id;  // Unique property for Dhauv class
  }

  // Overriding the display() method from the Student class
  display() {
    return `My Id is ${this.id}, My name is ${this.name}, and my age is ${this.age}`;
  }
}

// Creating an instance of Dhauv
const dh = new Dhauv("Pawan", 25, 1);

// Displaying the result
console.log(dh.display()); // Output: My Id is 1, My name is Pawan, and my age is 25
```

### **Explanation:**
1. **Polymorphism** in the example above is achieved through **method overriding**.
   - The parent class (`Student`) has a method `display()`, but it simply prints "Hello".
   - The subclass (`Dhauv`) overrides the `display()` method to provide more specific details like the `id`, `name`, and `age` of the `Dhauv` object.

2. When we create an instance of `Dhauv` and call `display()`, it executes the overridden version of the method, showing `My Id is 1, My name is Pawan, and my age is 25`, rather than the one in the parent class (`Student`), which only says "Hello".

---

### **Types of Polymorphism in JavaScript**

#### 1. **Compile-time Polymorphism (Method Overloading)**:
   - In languages like Java or C++, you can define multiple methods with the same name but different parameters. JavaScript does not natively support **method overloading**.
   - However, we can simulate method overloading by checking the number or type of arguments within a method.

   **Simulated Example:**
   ```javascript
   class Calculator {
     // Method that can perform addition based on the number of arguments
     add() {
       if (arguments.length === 1) {
         return arguments[0];
       } else if (arguments.length === 2) {
         return arguments[0] + arguments[1];
       }
     }
   }

   const calc = new Calculator();
   console.log(calc.add(5));         // Output: 5
   console.log(calc.add(5, 10));     // Output: 15
   ```

   **Explanation**: 
   - The `add()` method checks how many arguments are passed. Depending on the number of arguments, it behaves differently. This is a form of compile-time polymorphism that is **simulated** in JavaScript.

---

#### 2. **Run-time Polymorphism (Method Overriding)**:
   - This occurs when a subclass provides a specific implementation for a method that is already defined in the parent class. In JavaScript, this is achieved by **overriding** the method in the child class.

   **Example (from the previous code)**:
   - The method `display()` is defined in the `Student` class, but is **overridden** in the `Dhauv` class to return a more specific message.

---

### **Note :**

1. **Polymorphism** allows you to use the same method name but get different behavior depending on the object that calls it.
2. **Method Overriding** is the most common form of polymorphism in JavaScript, where a subclass provides its own implementation of a method defined in the parent class.
3. JavaScript does not support **Method Overloading** directly, but we can simulate it by handling different arguments inside a method.

---

By using polymorphism, you can design flexible and reusable code, where the same method name can be used to perform different tasks based on the object type.

