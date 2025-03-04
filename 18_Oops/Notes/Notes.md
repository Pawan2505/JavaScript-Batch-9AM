### **Lecture Notes: JavaScript OOP Concepts**

---

## **Introduction to Object-Oriented Programming (OOP)**

Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as objects with properties and behaviors. This paradigm promotes code reusability, maintainability, and scalability, which is critical in building large-scale applications.

JavaScript, while initially a functional programming language, has adopted OOP features, especially after ES6, with features like classes and object literals.

---

## **Key Concepts in OOP**

### **Object**
An **object** is a collection of related properties (data) and methods (functions) that operate on that data. 

For example, consider a `Student` object in an Indian context:

```javascript
const student = {
    name: 'Rahul Kumar',
    age: 22,
    college: 'Delhi University',
    greet: function() {
        console.log('Namaste! I am ' + this.name + ' from ' + this.college);
    }
};
student.greet();  // Output: Namaste! I am Rahul Kumar from Delhi University
```

---

## **Why Use OOP?**
- **Reusability**: Write once, use many times across different parts of your program.
- **Maintainability**: Code is modular, so individual parts can be updated without affecting the rest of the system.
- **Organization**: Group related data and methods together, making code easier to understand.
- **Abstraction**: Allows interaction with an object through a simplified interface, without delving into its complexities.

---

## **Parts of OOP in JavaScript**

### **1. Object Literal**
An object literal is a concise and simple way of creating an object directly. 

#### Example:
```javascript
const indianCricketer = {
    name: 'Virat Kohli',
    team: 'India',
    role: 'Batsman',
    greet: function() {
        console.log(this.name + ' plays for the ' + this.team + ' team as a ' + this.role);
    }
};

indianCricketer.greet();  // Output: Virat Kohli plays for the India team as a Batsman
```

### **2. Constructor Function**
A **constructor function** is used to define a template for creating objects. It is invoked with the `new` keyword.

#### Example:
```javascript
function IndianPolitician(name, party) {
    this.name = name;
    this.party = party;
    this.introduce = function() {
        console.log('I am ' + this.name + ' from the ' + this.party + ' party.');
    };
}

const politician1 = new IndianPolitician('Narendra Modi', 'BJP');
politician1.introduce();  // Output: I am Narendra Modi from the BJP party.
```

### **3. Prototypes**
Every function in JavaScript has a `prototype` property, allowing shared methods to be added.

#### Example:
```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
};

const dog = new Animal('Bruno');
dog.speak();  // Output: Bruno makes a sound.
```

### **4. Classes (ES6)**
The class syntax in ES6 makes creating objects and working with inheritance more intuitive.

#### Example:
```javascript
class IndianChef {
    constructor(name, cuisine) {
        this.name = name;
        this.cuisine = cuisine;
    }

    cook() {
        console.log(this.name + ' is cooking ' + this.cuisine + ' dishes.');
    }
}

const chef = new IndianChef('Sanjeev Kapoor', 'North Indian');
chef.cook();  // Output: Sanjeev Kapoor is cooking North Indian dishes.
```

### **5. Instances (`new`, `this`)**
Instances are individual objects created from a class. `this` refers to the instance within a class.

#### Example:
```javascript
class CricketPlayer {
    constructor(name, team) {
        this.name = name;
        this.team = team;
    }

    play() {
        console.log(this.name + ' is playing for ' + this.team);
    }
}

const player = new CricketPlayer('MS Dhoni', 'India');
player.play();  // Output: MS Dhoni is playing for India
```

---

## **The 4 Pillars of OOP**

### **1. Abstraction**
Abstraction hides the implementation details of a system and exposes only the relevant functionalities. 

#### Example:
```javascript
class Train {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    start() {
        console.log('Train is starting with a speed of ' + this.speed + ' km/h.');
    }
}

const train = new Train('Indian Railways', 100);
train.start();  // Output: Train is starting with a speed of 100 km/h.
```
In this case, the internal workings of how the train starts are abstracted.

### **2. Encapsulation**
Encapsulation involves bundling data and methods that operate on that data within a single unit, and restricting access to some of the object's components.

#### Example:
```javascript
class BankAccount {
    #balance = 0;  // Private field (simulated using #)

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance());  // Output: 1000
```

### **3. Inheritance**
Inheritance allows one class to acquire the properties and methods of another class.

#### Example:
```javascript
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    work() {
        console.log(this.name + ' is working as ' + this.role);
    }
}

class Manager extends Employee {
    constructor(name, role, department) {
        super(name, role);
        this.department = department;
    }

    manage() {
        console.log(this.name + ' is managing the ' + this.department + ' department.');
    }
}

const manager = new Manager('Suresh', 'Manager', 'HR');
manager.work();  // Output: Suresh is working as Manager
manager.manage();  // Output: Suresh is managing the HR department
```

### **4. Polymorphism**
Polymorphism allows methods to take different forms based on the object that calls them.

#### Example:
```javascript
class Animal {
    speak() {
        console.log('Animal makes a noise');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

const dog = new Dog();
dog.speak();  // Output: Dog barks

const cat = new Cat();
cat.speak();  // Output: Cat meows
```

- The same `speak()` method works differently based on whether it's called by a `Dog` or a `Cat`.

---

## **Note:**

- **Objects** are collections of properties and methods, representing real-world entities.
- **OOP in JavaScript** can be implemented through object literals, constructor functions, prototypes, and ES6 classes.
- The **four pillars** of OOP (Abstraction, Encapsulation, Inheritance, Polymorphism) help manage complexity and improve maintainability.
