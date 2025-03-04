### Lecture Notes on **Classes in JavaScript** (with Indian Context)

In this Notes, we will explore the concept of **Classes** in JavaScript, a fundamental part of Object-Oriented Programming (OOP). We will discuss how to define and use classes, as well as how they relate to **objects**, **constructors**, and **inheritance**. We'll also dive into how to use **getters**, **setters**, and **static methods** in classes.

By the end of the Notes, you'll be able to create reusable and maintainable code using classes in JavaScript, making your programs cleaner and easier to manage.

---

### **What is a Class in JavaScript?**

A **class** is a blueprint for creating objects. It defines a template for objects that share the same properties and behaviors. Think of a class as a mold that helps you create objects with similar characteristics.

For example, in India, a **Car** class might represent all cars, but each car object created from the class will have its own unique characteristics (like `make`, `model`, `color`, etc.).

In JavaScript, classes were introduced in **ES6 (ECMAScript 2015)** to provide a clearer and more structured way of dealing with objects and inheritance compared to traditional JavaScript functions.

---

### **Basic Syntax of a Class in JavaScript**

Here is how we define a simple class:

```javascript
class ClassName {
    // Constructor method to initialize the object
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }

    // Method to perform some action
    methodName() {
        // code to perform action
    }
}
```

- **`constructor`**: The constructor method is called when an object is created from the class. It initializes the properties of the object.
- **Methods**: Functions that define the behaviors of the class. These can be used to perform actions related to the class.

---

### **Creating an Instance of a Class**

To create an instance (object) of a class, we use the `new` keyword. It creates a new object and automatically calls the constructor to set up the initial properties.

#### Example:

```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}

// Creating an instance of the Car class
const myCar = new Car("Maruti Suzuki", "Swift");

// Calling the displayInfo method on the object
myCar.displayInfo();  // Output: Car Brand: Maruti Suzuki, Model: Swift
```

In this example:
- The `Car` class has a constructor that sets the `brand` and `model` of the car.
- The `displayInfo` method is used to display the car's details.
- We create a new instance of `Car` using `new Car("Maruti Suzuki", "Swift")` and store it in the `myCar` variable.

---

### **Class Methods**

Classes in JavaScript can have **methods**, which are functions defined within the class. These methods perform actions on the data or properties of the class.

#### Example:

```javascript
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // Method to display teacher info
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }

    // Method to introduce the teacher
    introduce() {
        console.log(`Hello, I am ${this.name}, a teacher of ${this.subject}.`);
    }
}

// Creating an instance of the Teacher class
const teacher1 = new Teacher("Mr. Sharma", "Mathematics");

// Calling methods on the teacher object
teacher1.teach();  // Output: Mr. Sharma is teaching Mathematics.
teacher1.introduce();  // Output: Hello, I am Mr. Sharma, a teacher of Mathematics.
```

In this example:
- The `Teacher` class has two methods: `teach()` and `introduce()`.
- Each method performs a specific action related to the teacher object.
- We create a `teacher1` object and call its methods to display information.

---

### **Inheritance in Classes**

In JavaScript, you can use **inheritance** to create a new class based on an existing class. This allows you to create more specialized versions of an existing class.

In India, for example, we may have a base class `Vehicle`, and then specialized classes like `Car` and `Bike` that inherit the properties and behaviors of `Vehicle` but with their own unique features.

We use the `extends` keyword to create a subclass that inherits from a parent class.

#### Example:

```javascript
class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    move() {
        console.log(`${this.name} is moving.`);
    }
}

class Car extends Vehicle {
    constructor(name, type, brand) {
        super(name, type);  // Calls the constructor of the parent class (Vehicle)
        this.brand = brand;
    }

    // Overriding the move method for the Car class
    move() {
        console.log(`${this.name} (a ${this.brand} car) is driving on the road.`);
    }
}

// Creating an instance of the Car class
const myCar = new Car("Swift", "Car", "Maruti Suzuki");
myCar.move();  // Output: Swift (a Maruti Suzuki car) is driving on the road.
```

In this example:
- The `Vehicle` class has basic properties like `name` and `type` and a method `move()`.
- The `Car` class extends the `Vehicle` class, inheriting its properties and methods.
- The `Car` class also overrides the `move()` method to provide a specific behavior for cars.

---

### **Getters and Setters in Classes**

In JavaScript classes, you can define **getters** and **setters** to control how properties are accessed and modified. These are useful in encapsulating and protecting the internal state of an object.

- **Getter**: A method that returns the value of a property.
- **Setter**: A method that modifies the value of a property.

#### Example:

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this._age = age;  // Convention to mark it as private
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        if (newAge < 0 || newAge > 100) {
            console.log("Please enter a valid age.");
        } else {
            this._age = newAge;
        }
    }

    // Method to display student info
    displayInfo() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating an instance of the Student class
const student1 = new Student("Priya", 22);

// Accessing the getter
console.log(student1.age);  // Output: 22

// Using the setter to change the age
student1.age = 25;
console.log(student1.age);  // Output: 25

// Trying to set an invalid age
student1.age = -5;  // Output: Please enter a valid age.
```

In this example:
- The `Student` class has a getter and setter for the `age` property.
- The setter ensures that the age cannot be negative or greater than 100, protecting the internal state of the object.

---

### **Static Methods in Classes**

**Static methods** are methods that are not called on an instance of the class, but on the class itself. These are used for operations that do not depend on the instance's properties.

#### Example:

```javascript
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Instance method to check balance
    checkBalance() {
        console.log(`Balance: ₹${this.balance}`);
    }

    // Static method to calculate interest
    static calculateInterest(balance) {
        const interestRate = 0.04;
        return balance * interestRate;
    }
}

// Creating an instance of BankAccount
const account1 = new BankAccount("Amit", 50000);

// Calling the instance method
account1.checkBalance();  // Output: Balance: ₹50000

// Calling the static method
const interest = BankAccount.calculateInterest(50000);
console.log(`Interest: ₹${interest}`);  // Output: Interest: ₹2000
```

In this example:
- The `BankAccount` class has an instance method `checkBalance()` and a static method `calculateInterest()`.
- The static method can be called directly on the class, not on the instance.

---

### **Class Expression**

A **class expression** is a way to define a class as part of an expression. You can define classes in both named and anonymous formats.

#### Example:

```javascript
const Teacher = class {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    introduce() {
        console.log(`I am ${this.name}, and I teach ${this.subject}.`);
    }
};

const teacher1 = new Teacher("Mrs. Mehta", "English");
teacher1.introduce();  // Output: I am Mrs. Mehta, and I teach English.
```

In this example, we use a class expression to define the `Teacher` class and assign it to the `Teacher` variable.

---

### **Note:**

Covered topics:

1. **Class Syntax**: Defining a class, constructor, and methods.
2. **Creating Instances**: Using `new` to create objects from a class.
3. **Methods**: How to define methods inside a class.
4. **Inheritance**: How to extend a class and use the `extends` keyword.
5. **Getters and Setters**: How to control access to properties.
6. **Static Methods**: Methods that belong to the class, not instances.
7. **Class Expressions**: Defining classes as part of an expression.

Classes are a powerful tool for organizing and structuring code, especially when building large applications. By understanding and using classes effectively, you can create reusable, maintainable, and more readable code.