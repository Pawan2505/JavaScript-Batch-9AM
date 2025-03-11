// Constructor function to create a Student object
function Student(name) {
  this._name = name; // Internal private field (underscore convention)

  // Using Object.defineProperty to define getter and setter for 'name'
  Object.defineProperty(this, "name", {
    get: function () {
      return this._name; // Getter for 'name'
    },

    set: function (value) {
      this._name = value; // Setter for 'name'
    },
  });
}

// Create a new Student object
const st = new Student("Pawan");

// Access the name using the getter
console.log(st.name); // Output: Pawan

// Direct access to the private '_name' property is not possible anymore
// console.log(st._name);  // This would throw an error, '_name' is not directly accessible
