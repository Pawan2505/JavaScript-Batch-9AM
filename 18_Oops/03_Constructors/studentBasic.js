// Constructor function to create a Student object
function Student(name) {
  this.name = name; // 'name' property is assigned directly
}

// Create a new Student object
const st = new Student("Pawan");

// Access and log the name property
console.log(st.name); // Output: Pawan
