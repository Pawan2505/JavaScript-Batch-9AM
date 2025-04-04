// Array

// array copy karna

// let arr = [1, 2, 3, 4, 5];

// let newArray = [...arr];

// console.log(newArray);

// new element add karna

// let arr = [1, 2, 3, 4, 5];

// let newArray = [...arr,"Pawan"];

// console.log(newArray);

// let arr = [1, 2, 3, 4, 5];

// let newArray = [true,...arr, "Pawan"];

// console.log(newArray);

// let arr = [1, 2, 3, 4, 5];

// arr = [...arr, "Pawan"];

// console.log(arr);

// 2 array -> merge karana

// const numbers1 = [23, 56, 89, 50];
// const numbers2 = [213, 45, 7, 7];

// let mergeArray = [...numbers1,...numbers2]

// console.log(mergeArray)

// object

// object copy karana

// const obj1 = {
//     id:1,
//     name: "Sejal",
// }

// const obj2 = { ...obj1 };

// console.log(obj2)

// 2 object ko merge karana

// let obj1 = {
//   name: "dhruv",
//   salary: 10000000000,
// };

// const obj2 = {
//     id: 1,
//     name:"nency"
// };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);


// update object karana

// let obj1 = {
//   name: "dhruv",
//   salary: 10000000000,
// };

// obj1 = { ...obj1, salary: 10000 }

// console.log(obj1);


// new properties add karana

let obj1 = {
  name: "dhruv",
  salary: 10000000000,
};

obj1 = { id:1,...obj1, Address: "Gujrat" }

console.log(obj1);
