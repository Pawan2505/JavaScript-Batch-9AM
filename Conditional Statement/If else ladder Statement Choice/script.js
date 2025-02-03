// if-else Ladder Statement (Choice-Based Problems)

// 1. Leap year or not


//  1. year%4 == 0 && year%100 != 0 -> leap year
//  2. year%400 == 0 -> leap year


// let year = 2000;

// if( (year%4 == 0 && year%100 != 0) ||(year%400 == 0 ) ){
//     console.log("Leap Year!")
// }else{
//     console.log("Not Leap Year!");
// }



// 2. Prime number

// concept :   b/w 2 and sqrt(num) -> agr is range me koi bhee number num ko divide kr deta hai aur rem == 0 then not prime4


// function isPrime(num){

//     if(num <= 1){
//         return false;
//     }

//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num%i == 0){
//             return false;
//         }
//     }

//     return true;
// }


// let num = 31;

// if(isPrime(num)){
//     console.log("Prime Number!");
// }else{
//     console.log("Not Prime!");
// }



// function classifyGrade(score) {
//     let grade;

//     if (score >= 90) {
//         grade = 'A';
//     } else if (score >= 80) {
//         grade = 'B';
//     } else if (score >= 70) {
//         grade = 'C';
//     } else if (score >= 60) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }

//     console.log(`The grade is: ${grade}`);
// }

// // Example usage
// classifyGrade(55);



// function calculate(num1, num2, operator) {
//     let result = 0;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         result = num1 / num2;
//     } else {
//         result = 'Invalid operator';
//     }

//     console.log(`The result is: ${result}`);
// }

// Example usage
// calculate(10, 5, '-');
// calculate(10, 5, '-');
// calculate(10, 5, '*');
// calculate(10, 5, '/');
// calculate(10, 5, '%');


