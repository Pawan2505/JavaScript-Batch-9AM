// -----------------------------------
// 1. Defining a JavaScript Class
// -----------------------------------

// In JavaScript, we define a class using the `class` keyword.
// A class is a blueprint for creating objects with shared properties and methods.

class Student {
  // -----------------------------------
  // 2. Constructor Method
  // -----------------------------------

  // The `constructor` method is a special method called automatically when an object is created from the class.
  // It is used to initialize the object’s properties.

  constructor(id, name) {
    this.id = id; // Setting the id property of the object
    this.name = name; // Setting the name property of the object
    console.log("Constructor called..."); // This will print whenever the constructor is invoked
  }

  // -----------------------------------
  // 3. Method Definition
  // -----------------------------------

  // The `display` method is a normal function defined inside the class.
  // It uses the object's properties (id, name) and prints them.

  display() {
    console.log(`Id : ${this.id} and Name : ${this.name}`); // Outputs the id and name of the student
  }
}

// -----------------------------------
// 4. Creating an Object from the Class
// -----------------------------------

// In JavaScript, we use the `new` keyword to create an instance (object) from a class.
// Here, we create an object `obj` from the `Student` class and pass `1` and `"Pawan"` as arguments to the constructor.

const obj = new Student(1, "Pawan"); // This will call the constructor and print "Constructor called..."

// -----------------------------------
// 5. Calling a Method on the Object
// -----------------------------------

// Now that we have an object `obj`, we can call the `display` method on it.
// The `display` method will output the student's id and name.

obj.display(); // Output: "Id : 1 and Name : Pawan"
