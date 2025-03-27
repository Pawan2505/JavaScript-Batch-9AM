// let person = {
//   "name": "Priyanshi",
//   "age": 16,
//   "salary":0
// }

// localStorage.setItem("user", JSON.stringify(person))

// let obj = JSON.parse(localStorage.getItem("user"))

// console.log(obj)

// console.log(typeof obj)

// console.log(obj.name)


// const firstPrise = "Sejal"

// localStorage.setItem("p1", firstPrise);


// let num = 999;


// localStorage.setItem("Number", num)

// const n1 = localStorage.getItem("Number")

// console.log(n1)

// console.log(typeof n1)


// let bool = false;

// localStorage.setItem("boolean", bool)


// localStorage.clear()

// let object = {
//   name: "Pawan Maurya",
//   age: 25,
//   salary: 10,
//   greet: function () {
//     let x = 10;
//   }
// }

// localStorage.setItem("Person1",JSON.stringify(object))



// let person2 = {
//   name: "Vishwa",
//   age:20
// }

// localStorage.setItem("p2", JSON.stringify(person2))

// person2.salary = 99

// localStorage.setItem("p2", JSON.stringify(person2));

// person2.age = 18

// delete person2.name;

// person2.name ="Radha"
// localStorage.setItem("p2", JSON.stringify(person2));



let person2 = {
  name: "Vishwa",
  age: 20,
  car: {
    car1: "BMW",
    car2:"Porsche"
  }
}

console.log(person2["name"])

console.log(person2.car.car2)

localStorage.setItem("pp",JSON.stringify(person2))
