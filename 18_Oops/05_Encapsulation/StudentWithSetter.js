// This class has a setter to validate and modify the 'name' property.

class Student {
  #name; // Private field for name
  #age; // Private field for age


  constructor(name, age) {
    this.#name = name; // Initialize private field 'name'
    this.#age = age; // Initialize private field 'age'
  }

  // Getter for 'name'
  get name() {
    return this.#name;
  }

  // Getter for 'age'
  get age() {
    return this.#age;
  }

  // Setter for 'name' with validation
  set name(value) {
    // Validate that the name is at least 5 characters long
    if (value.length < 5) {
      console.log("Name must be at least 5 characters long!");
    } else {
      this.#name = value; // Set the private 'name' if valid
    }
  }
}

// Creating an instance of the Student class
const st = new Student("Pawan", 25);

// Attempting to set an invalid name (less than 5 characters)
st.name = "Pa"; // This will trigger the setter and print a validation message

// Accessing the updated name and age
console.log(st.name); // Uses the getter for name (it will still be "Pawan")
console.log(st.age); // Uses the getter for age
