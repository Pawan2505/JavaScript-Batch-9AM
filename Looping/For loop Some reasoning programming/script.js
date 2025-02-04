//  1. Prime numbers within a given range
// 👉 Find all prime numbers between two given numbers.

// function isPrime(num){
//     if(num <= 1){
//         return false;
//     }

//     for(let i = 2; i<=Math.sqrt(num); i++){
//         if(num%i == 0){
//             return false;
//         }
//     }

//     return true;
// }


// let start = 1;
// let end = 20;

// // let result = "";
// let result = [];
// let index = 0;
// for(let i = start; i <= end; i++){

//     if(isPrime(i)){
//        result[index] = i;
//        index++;
//     }
// }

// console.log(result);
// console.log(...result);


// Method : 2

// let num = 11;

// let count = 0;

// for(let i = 1; i <= 12; i++){
//     if(num%i == 0){
//         count++;
//     }
// }

// if(count == 2){
//     console.log("Prime Number!");
// }else{
//     console.log("Not Prime Number!");
// }


// function countfact(num){
//     let count = 0;
// for(let i = 1; i <= num; i++){
//     if(num%i == 0){
//         count++;
//     }
// }

// return count;
// }


// let start = 1;

// let end = 20;

// for(let i = start; i <= end; i++){

//     if(countfact(i) == 2){
//         console.log(i);
//     }

// }


// 2. Factorial of a number
// 👉 Calculate the factorial of a given number (e.g., 5! = 5×4×3×2×1).





// 3. Factors of a number
// 👉 Find all the factors (divisors) of a given number.

// 4. Prime Factors of a number
// 👉 Find the prime factors of a number (e.g., 12 = 2×2×3).

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let arr = [12,34,5,67,8,8,12, "Pawan"];

// console.log(`Length of array : ${arr.length}`)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log('Sum:', sum);

// const number = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
//     }
// }


// for (let i = 0; i < 5; ) { // Missing i++
//     console.log(i);
// }


