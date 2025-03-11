// class Student {
//   // constructor

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   display() {
//     console.log(`Name : ${this.name} and Age : ${this.age}`);
//   }
// }

// const st = new Student("Pawan", 25);

// st.display();

// class Student {
//   #name; // private
//   #age; // private

//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }

//   get name() {
//     return this.#name;
//   }

//   get age() {
//     return this.#age;
//   }
// }

// const st = new Student("Pawan", 25);

// console.log(st.name);
// console.log(st.age);

class Student {
  #name; // private
  #age; // private

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set name(value) {
    if (value.length < 5) {
      console.log("Name must be atleast 5 character long!");
    } else {
      this.#name = value;
    }
  }
}

const st = new Student("Pawan", 25);

st.name = "Pa"; // here set method work

console.log(st.name); // here get method work
console.log(st.age); // here get  method work
