// This class uses private fields to store data and provides getters.

class Student {
  // Private fields to store name and age
  #name;
  #age;

  // Constructor to initialize private fields
  constructor(name, age) {
    this.#name = name; // Private property 'name'
    this.#age = age; // Private property 'age'
  }

  // Getter for 'name'
  get name() {
    return this.#name;
  }

  // Getter for 'age'
  get age() {
    return this.#age;
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Accessing private fields via getters
console.log(st.name); // Uses the getter for name
console.log(st.age); // Uses the getter for age
