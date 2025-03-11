// function Student(name) {
//   this.name = name;

//   this.display = function () {
//     console.log(`Name : ${name}`);
//   };
// }

// const st = new Student("Pawan");

// st.display();

// function Student(name) {
//   this.name = name;
// }

// const st = new Student("Pawan");

// console.log(st.name);

// function Student(name) {
//   this._name = name; // public

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

function Student(name) {
  let _name = name; // private

  Object.defineProperty(this, "name", {
    get: function () {
      return _name;
    },

    set: function (value) {
      this._name = value;
    },
  });
}

const st = new Student("Pawan");

console.log(st.name);

console.log(st._name);
