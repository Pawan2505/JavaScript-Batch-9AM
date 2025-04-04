//  destructuring me array k andar se data ko nikal kr -> variable k andar data store krta hai


// variable me data store karana

// const numbers = [23, 56, 89];
  
// const [a, b, c] = numbers;

// console.log(a); // 23
// console.log(b); // 56
// console.log(c); // 86


// skip data krana

// const numbers = [23, 56, 89];
  
// const [a, , c] = numbers;

// console.log(a); // 23
// console.log(c); // 86


// rest (... operator)


// const numbers = [23, 56, 89, 50];
  
// const [a,b, ...rest] = numbers;

// console.log(a); // 23
// console.log(b); // 56
// console.log(rest) // [23,56,89,50]

// 2 array -> merge karana


// const numbers1 = [23, 56, 89, 50];
// const numbers2 = [213, 45, 7, 7];
  
// let mergeArray = [...numbers1,...numbers2]

// console.log(mergeArray)


// let x = 34;
// let y = 40;

// [x, y] = [y, x]

// console.log(x); // 40
// console.log(y); // 34

// function me destructuring karna

// function getCoordinate() {
//     return [50, 60];
// }

// const [x, y] = getCoordinate();

// console.log(x)
// console.log(y)