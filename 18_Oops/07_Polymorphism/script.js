// Base class representing a Student
class Student {
  // Constructor to initialize name and age of the student
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display a generic message (this method is overridden by subclasses)
  display() {
    console.log("Hello");
  }
}

// Derived class Dhauv extends Student (inherits from Student)
class Dhauv extends Student {
  // Constructor for Dhauv, calling the parent constructor with `super()`
  constructor(name, age, id) {
    super(name, age); // Calls the constructor of the Student class
    this.id = id; // Adds a unique property (id) for the Dhauv class
  }

  // Overriding the display method from the Student class
  display() {
    return `My Id is ${this.id}, My name is ${this.name}, and my age is ${this.age}`;
  }
}

// Creating an instance of Dhauv class
const dh = new Dhauv("Pawan", 25, 1);

// Calling the display method of the Dhauv class (which overrides the method from Student)
console.log(dh.display()); // Output: My Id is 1, My name is Pawan, and my age is 25
