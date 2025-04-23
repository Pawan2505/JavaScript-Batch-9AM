class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name); // Calls Person's constructor
    this.course = course;
  }

  showCourse() {
    console.log(`${this.name} is enrolled in ${this.course}`);
  }
}

let s1 = new Student("Pawan", "PGDAC");
s1.greet(); // Output: Hello, I am Pawan
s1.showCourse(); // Output: Pawan is enrolled in PGDAC
