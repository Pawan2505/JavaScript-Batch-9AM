// Base class representing a Student
class Student {
  // Constructor to initialize Student's name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the student's name and age
  display() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
  }
}

// Derived class Dhauv which inherits from Student
class Dhauv extends Student {
  // Constructor to initialize name, age (inherited), and id (specific to Dhauv)
  constructor(name, age, id) {
    super(name, age); // Call the parent class (Student) constructor
    this.id = id; // Initialize the id property specific to Dhauv
  }

  // Method to display detailed information about the Dhauv instance
  details() {
    console.log(
      `My Id is ${this.id}, my name is ${this.name}, and my age is ${this.age}`
    );
  }
}

// Creating an instance of Student
const st = new Student("Sejal", 18);
st.display(); // Output: I am Sejal and my age is 18

// Creating an instance of Dhauv
const dh = new Dhauv("Pawan", 25, 1);
dh.details(); // Output: My Id is 1, my name is Pawan, and my age is 25

// Error Example (uncomment to test):
// const dhError = new Dhauv(1); // Error: missing name and age arguments
