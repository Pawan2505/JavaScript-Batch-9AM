// Creating an object "person" with properties: name, age, and salary
let person = {
  name: "Priyanshi", // Name of the person
  age: 16, // Age of the person
  salary: 0, // Salary of the person
};

// Storing the "person" object in localStorage as a string (JSON format)
localStorage.setItem("user", JSON.stringify(person));

// Retrieving and parsing the stored JSON data from localStorage
let obj = JSON.parse(localStorage.getItem("user"));

// Logging the entire object to the console
console.log(obj);

// Checking the type of the "obj" variable (should be 'object')
console.log(typeof obj);

// Accessing and logging the 'name' property of the object
console.log(obj.name);

// Storing a string value "Sejal" in localStorage
const firstPrise = "Sejal";
localStorage.setItem("p1", firstPrise);

// Storing a numeric value in localStorage
let num = 999;
localStorage.setItem("Number", num);

// Retrieving the stored "Number" from localStorage and logging it
const n1 = localStorage.getItem("Number");
console.log(n1); // Note: n1 is still a string!
console.log(typeof n1); // Check the type of n1 (it will be 'string')

// Storing a boolean value in localStorage
let bool = false;
localStorage.setItem("boolean", bool);

// Clearing all data from localStorage
localStorage.clear();

// Creating an object with a method (greet function)
let object = {
  name: "Pawan Maurya", // Name of the person
  age: 25, // Age of the person
  salary: 10, // Salary of the person
  greet: function () {
    // A method inside the object (not used here)
    let x = 10;
  },
};

// Storing the object in localStorage (stringified version)
localStorage.setItem("Person1", JSON.stringify(object));

// Creating and storing another person object in localStorage
let person2 = {
  name: "Vishwa", // Initial name of the person
  age: 20, // Age of the person
};

// Storing the "person2" object in localStorage
localStorage.setItem("p2", JSON.stringify(person2));

// Modifying the "person2" object and updating localStorage
person2.salary = 99; // Adding salary property
localStorage.setItem("p2", JSON.stringify(person2));

// Modifying other properties of "person2" and updating again in localStorage
person2.age = 18; // Changing age
delete person2.name; // Deleting the 'name' property
person2.name = "Radha"; // Adding a new name

// Storing the updated "person2" object in localStorage
localStorage.setItem("p2", JSON.stringify(person2));

// Creating a more complex object "person2" with a nested object
let person2 = {
  name: "Vishwa", // Name of the person
  age: 20, // Age of the person
  car: {
    // Nested object "car" with two properties
    car1: "BMW",
    car2: "Porsche",
  },
};

// Accessing properties of the nested object using dot and bracket notation
console.log(person2["name"]); // Using bracket notation
console.log(person2.car.car2); // Accessing 'car2' inside the 'car' object

// Storing the complex object in localStorage (stringified)
localStorage.setItem("pp", JSON.stringify(person2));
