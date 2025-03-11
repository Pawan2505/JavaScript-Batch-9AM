// Constructor function with closures to create private variables
function Student(name) {
  let _name = name; // _name is a private variable

  // Using Object.defineProperty to define getter and setter for 'name'
  Object.defineProperty(this, "name", {
    get: function () {
      return _name; // Getter for 'name' accesses the private _name variable
    },

    set: function (value) {
      _name = value; // Setter for 'name' modifies the private _name variable
    },
  });
}

// Create a new Student object
const st = new Student("Pawan");

// Access the name using the getter
console.log(st.name); // Output: Pawan

// _name is now private and cannot be accessed directly
// console.log(st._name);  // This will throw an error, '_name' is not accessible directly
