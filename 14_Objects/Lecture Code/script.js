// Example 1: Without using Object

// Here, we define individual variables to store information
let name = "Pawan"; // Store name
let age = 25; // Store age
let salary = 99; // Store salary

// Displaying the values
console.log(name); // Logs the value of the name
console.log(age); // Logs the value of the age
console.log(salary); // Logs the value of the salary

// Example 2: Using Object to store multiple pieces of information

// Here, we use an object to group related properties together
const person = {
  name: "Pawan", // Property: name
  age: 24, // Property: age
  id: 11, // Property: id
};

// Displaying the object
console.log(person); // Logs the entire object

// Accessing object properties using dot notation
console.log(person.name); // Logs the value of the 'name' property
console.log(person.age); // Logs the value of the 'age' property
console.log(person.id); // Logs the value of the 'id' property

// Accessing object properties using bracket notation
console.log(person["name"]); // Logs the value of the 'name' property
console.log(person["id"]); // Logs the value of the 'id' property

// Example 3: Using function within an object

// In this example, we define a method (function) inside the object
const personWithFunction = {
  name: "Pawan",
  age: 24,
  id: 11,

  // A method that logs a message
  teaching: function () {
    console.log("Teaching JavaScript");
  },
};

// Calling the method within the object
personWithFunction.teaching(); // Logs: Teaching JavaScript

// Example 4: Using 'this' keyword inside an object method

// 'this' refers to the current object in the context of a method
const personWithThis = {
  name: "Pawan",
  age: 24,
  id: 11,

  // A method that uses the 'this' keyword
  teaching: function () {
    console.log(this); // Logs the current object (this refers to the object)
    console.log(
      `I am ${this.name}. My age is ${this.age} and my id is ${this.id}`
    );
    // Logs: I am Pawan. My age is 24 and my id is 11
  },
};

// Calling the method
personWithThis.teaching();

// Example 5: Updating properties and deleting them in an object

// Updating the value of a property using dot notation
personWithThis.name = "Radha";

// Adding a new property 'salary'
personWithThis.salary = 999;

// Displaying the updated object
console.log(personWithThis); // Logs updated object with new name and salary

// Deleting the 'salary' property from the object
delete personWithThis.salary;

// Displaying the object after deletion
console.log(personWithThis); // Logs object after 'salary' property has been deleted

// Example 6: Object containing an array

// Here, we store an array inside the object as a property
let student = {
  name: "Dhruv", // Student's name
  subject: ["OS", "CPP", "DSA", "Networking", "Web Development"], // List of subjects
};

// Displaying the student object
console.log(student);

// Accessing an element of the array inside the object
console.log(student.subject[2]); // Logs: DSA (the third subject in the array)

// Deleting an element from the array inside the object
delete student.subject[2];

// Displaying the object after deletion (notice that index 2 is now empty)
console.log(student);

// Updating an element in the array inside the object
student.subject[2] = "Kya haal hai"; // Replaces the deleted element with a new value

// Adding a new subject to the array (at index 5)
student.subject[5] = "Fine";

// Displaying the object with updated subjects
console.log(student);
