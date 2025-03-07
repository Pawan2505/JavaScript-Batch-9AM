// // -----------------------------------
// // 1. Object Creation and Key-Value Pairs
// // -----------------------------------

// // An object stores data in key-value pairs.
// // Keys are always strings (or symbols) and values can be any data type.
// const obj = {
//   name: "Pawan", // key 'name' with value "Pawan"
//   age: 25, // key 'age' with value 25
// };

// // Logging the object to the console
// console.log(obj); // Output: { name: 'Pawan', age: 25 }

// // -----------------------------------
// // 2. Object Methods (Functions Inside Objects)
// // -----------------------------------

// // You can define methods (functions) inside objects. These methods can access object properties using 'this'.
// const obj = {
//   name: "Pawan",
//   age: 25,

//   // Method to print object properties
//   details: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`); // 'this' refers to the object
//     console.log(this); // 'this' refers to the entire object
//   },
// };

// // Logging the object
// console.log(obj);

// // Calling the method to see the output
// obj.details(); // Output: My name is Pawan and my age is 25, then the entire object

// // -----------------------------------
// // 3. Returning Values from Object Methods
// // -----------------------------------

// // Instead of logging data, we can return a value from the method.
// const obj = {
//   name: "Pawan",
//   age: 25,

//   // Method returning a string with object properties
//   details: function () {
//     return `My name is ${this.name} and my age is ${this.age}`;
//   },
// };

// // Logging the object
// console.log(obj);

// // Calling the method and logging the returned value
// console.log(obj.details()); // Output: My name is Pawan and my age is 25

// // -----------------------------------
// // 4. Modifying and Deleting Object Properties
// // -----------------------------------

// // You can dynamically add properties to objects and also modify or delete them.
// const obj = {
//   name: "Pawan",
//   age: 25,

//   // Method returning string
//   details: function () {
//     return `My name is ${this.name} and my age is ${this.age}`;
//   },
// };

// // Adding a new property 'salary' to the object
// obj.salary = 100;

// // Logging the object after adding the 'salary' property
// console.log(obj); // Output: { name: 'Pawan', age: 25, details: [Function], salary: 100 }

// // Deleting the 'age' property
// delete obj.age;

// // Logging the object after deleting 'age'
// console.log(obj); // Output: { name: 'Pawan', details: [Function], salary: 100 }

// // Modifying an existing property 'name'
// obj.name = "Vishwa";

// // Logging the object after modifying 'name'
// console.log(obj); // Output: { name: 'Vishwa', details: [Function], salary: 100 }

// // -----------------------------------
// // 5. Constructor Function (Creating Object Templates)
// // -----------------------------------

// // A constructor function is used to create objects with similar properties and methods.
// // It acts as a blueprint for creating multiple instances (objects) with similar structure.

// function Student(id, name, course) {
//   this.id = id; // 'id' property
//   this.name = name; // 'name' property
//   this.course = course; // 'course' property

//   // Method to return details about the student
//   this.details = function () {
//     return `Id: ${this.id}, Name: ${this.name}, Course: ${this.course}`;
//   };
// }

// // Creating instances of the 'Student' constructor function
// const person1 = new Student(1, "Nency", "Full Stack");
// const person2 = new Student(2, "Dhruv", "Full Stack");

// // Calling the 'details' method for each student instance
// console.log(person1.details()); // Output: Id: 1, Name: Nency, Course: Full Stack
// console.log(person2.details()); // Output: Id: 2, Name: Dhruv, Course: Full Stack

// // Checking the constructor function of person1
// console.log(person1.constructor); // Output: [Function: Student] - Reference to the Student constructor
