### **Lecture Notes: Polymorphism in JavaScript**

**Polymorphism** is one of the key principles of Object-Oriented Programming (OOP). The term "polymorphism" comes from the Greek words **"poly"** (meaning "many") and **"morph"** (meaning "forms"). So, polymorphism means **many forms**. 

In JavaScript, polymorphism allows objects of different types to respond to the same method in their own unique way. It enables one interface to be used for a general class of actions, with the specific action determined by the exact nature of the object.

There are two types of polymorphism in JavaScript:

1. **Method Overloading** (which is supported in some languages but not in JavaScript directly).
2. **Method Overriding** (which is supported in JavaScript).

In this lecture, we will focus on **Method Overriding**, which is the most common type of polymorphism in JavaScript.

---

### **Example of Polymorphism with Method Overriding**

Let’s consider a **Shape** class, and then we will have two subclasses: **Circle** and **Rectangle**. Both subclasses will override the `area()` method from the parent class **Shape** to calculate the area in their own way.

#### Code Example: Polymorphism using Method Overriding

```javascript
// Base class: Shape
class Shape {
    constructor(name) {
        this.name = name;  // Store the shape name
    }

    // Method to calculate area (this will be overridden in subclasses)
    area() {
        console.log("Area method should be overridden by subclasses.");
    }
}

// Derived class: Circle
class Circle extends Shape {
    constructor(name, radius) {
        super(name);  // Call the constructor of the parent class
        this.radius = radius;  // Store radius for circle
    }

    // Overriding the area method to calculate area of a circle
    area() {
        return Math.PI * this.radius * this.radius;  // Area of circle: πr²
    }
}

// Derived class: Rectangle
class Rectangle extends Shape {
    constructor(name, length, width) {
        super(name);  // Call the constructor of the parent class
        this.length = length;  // Store length for rectangle
        this.width = width;    // Store width for rectangle
    }

    // Overriding the area method to calculate area of a rectangle
    area() {
        return this.length * this.width;  // Area of rectangle: length * width
    }
}

// Creating instances of Circle and Rectangle
const myCircle = new Circle("Circle", 5);  // Circle with radius 5
const myRectangle = new Rectangle("Rectangle", 4, 6);  // Rectangle with length 4 and width 6

// Demonstrating polymorphism
console.log(`${myCircle.name} Area: ${myCircle.area()}`);  // Output: Circle Area: 78.53981633974483
console.log(`${myRectangle.name} Area: ${myRectangle.area()}`);  // Output: Rectangle Area: 24
```

---

### **Explanation of the Example**

1. **Shape Class**:
   - The `Shape` class is a **base class** (also called a parent class) with a constructor that takes `name` and stores it.
   - The `area()` method is defined in the `Shape` class, but it doesn't actually do anything. It only prints a message saying that subclasses should override this method.

2. **Circle Class**:
   - The `Circle` class is a **subclass** (child class) that extends the `Shape` class. It inherits the `name` property from the `Shape` class.
   - The `area()` method in the `Circle` class **overrides** the `area()` method from the `Shape` class. It provides the formula to calculate the area of a circle: π * r² (where `r` is the radius).

3. **Rectangle Class**:
   - The `Rectangle` class is another **subclass** that extends the `Shape` class.
   - Similar to the `Circle` class, it overrides the `area()` method to provide the formula for the area of a rectangle: length * width.

4. **Polymorphism in Action**:
   - When we create instances of `Circle` and `Rectangle`, both objects have their own `area()` method, even though they are called using the same name (`area`).
   - This is an example of **method overriding** where the same method (`area`) behaves differently depending on the object (either `Circle` or `Rectangle`).

5. **Different Results**:
   - The `myCircle.area()` method calculates the area of a circle, while `myRectangle.area()` calculates the area of a rectangle. Despite both methods having the same name (`area`), they perform different actions depending on the object type.

---

### **Key Points about Polymorphism**

1. **Polymorphism** allows a single method or function to work in multiple ways depending on the object it is acting upon.
2. In JavaScript, **method overriding** is the most common way to implement polymorphism. A subclass can override a method from its parent class to provide its own specific implementation.
3. Polymorphism promotes **code reuse**. You can use the same method name across different classes, but each class can implement it in its own way.
4. It makes the code **more flexible** and easier to extend. For example, if we add another shape, like `Triangle`, we can just implement its own `area()` method without changing the existing code for `Circle` or `Rectangle`.

---
