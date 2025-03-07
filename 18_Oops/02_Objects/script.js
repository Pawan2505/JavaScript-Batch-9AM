
// object -> key and value -> store

// const obj = {
//     name: "Pawan",
//     age:25
// }

// console.log(obj)


// const obj = {
//     name: "Pawan",
//     age: 25,
    
//     details: function () {
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
//         console.log(this)
//     }
// }

// console.log(obj)

// obj.details();

// // console.log(obj.details())


// const obj = {
//     name: "Pawan",
//     age: 25,
    
//     details: function () {
//        return `My name is ${this.name} and my age is ${this.age}`;
//     }
// }

// console.log(obj)

// console.log(obj.details())


// const obj = {
//     name: "Pawan",
//     age: 25,
    
//     details: function () {
//        return `My name is ${this.name} and my age is ${this.age}`;
//     }
// }

// obj.salary = 100;

// console.log(obj);

// delete obj.age;

// console.log(obj);

// obj.name = "vishwa"

// console.log(obj);

// constructor function

function Student(id, name, course) {
  this.id = id;
  this.name = name;
  this.course = course; 
  this.details =function () {
        return `Id : ${this.id} , Name : ${this.name}, Course : ${this.course}`
      }
}


const person1 = new Student(1, "nency", "Full Stack");
const person2 = new Student(2, "dhruv", "Full Stack");
console.log(person1.details());
console.log(person2.details());

console.log(person1.constructor);