// This file demonstrates how to use all the features of the Student class.

// Import the required class file (You can remove the imports if using everything in one file)
import { Student } from "./StudentWithSetter.js"; // Assuming using ES Modules

// Creating a student instance
const st = new Student("Pawan", 25);

// Accessing and displaying name and age using getter methods
console.log(st.name); // This uses the getter for name
console.log(st.age); // This uses the getter for age

// Trying to set an invalid name (less than 5 characters)
st.name = "Pa"; // This triggers the setter and logs a validation message

// Checking if the name was updated or not after the validation
console.log(st.name); // This will print "Pawan" (the name was not changed)
