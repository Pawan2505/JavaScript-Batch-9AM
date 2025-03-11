// function Student(name) {
//   this._name = name; // This is the internal property to hold the name.

//   Object.defineProperty(this, "name", {
//     get: function () {
//       return this._name; // Access the internal _name via 'this'
//     },

//     set: function (value) {
//       this._name = value; // Set the internal _name via 'this'
//     },
//   });
// }

// const st = new Student("Pawan");

// console.log(st.name); // Output: "Pawan"

// function Student(name) {
//   this._name = name;

//   this.display = function () {
//     console.log(`Name is : ${this._name}`);
//   };
// }

// const st = new Student("Pawan");

// st.display();

// function Student(name) {
//   this._name = name;

//   Object.defineProperty(this, "name", {
//     get: function () {
//       return this._name;
//     },
//     set: function (value) {
//       this._name = value;
//     },
//   });
// }

// const st = new Student("Pawan");

// console.log(st.name);
// console.log(st._name);

// function Student(name) {
//   let _name = name; // private

//   Object.defineProperty(this, "name", {
//     get: function () {
//       return _name;
//     },
//     set: function (value) {
//       _name = value;
//     },
//   });
// }

// const st = new Student("Pawan");

// console.log(st.name);
// console.log(st._name);

// class Student {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(value) {
//     this.#name = value;
//     }

// }

// const st = new Student("Pawan");

// console.log(st.name);

// class Student {
//   constructor(name) {
//     this._name = name; // public property (you can choose the naming convention)
//   }

//   display() {
//     console.log(`Name : ${this._name}`);
//   }
// }

// const st = new Student("Pawan");

// st.display();
