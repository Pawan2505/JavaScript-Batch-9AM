// This is a basic class that demonstrates how to define a constructor
// and how to create an object with properties.

class Student {
  // Constructor to initialize the name and age properties
  constructor(name, age) {
    this.name = name; // Public property 'name'
    this.age = age; // Public property 'age'
  }

  // Method to display student details
  display() {
    console.log(`Name: ${this.name} and Age: ${this.age}`);
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Calling the display method to print details
st.display();
