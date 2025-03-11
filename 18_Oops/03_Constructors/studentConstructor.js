// Constructor function to create a Student object
function Student(name) {
  this.name = name; // 'name' property is assigned

  // 'display' method to log student details
  this.display = function () {
    console.log(`Name: ${name}`);
  };
}

// Create a new Student object
const st = new Student("Pawan");

// Call the display method to show student's name
st.display(); // Output: Name: Pawan
