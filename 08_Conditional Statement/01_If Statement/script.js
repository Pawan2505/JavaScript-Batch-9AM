// // if Statement (Basic Condition Checking)

// // 1. Positive or Negative number
// let number = 0;
// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// // 2. Even or Odd number
// let num = 21;
// if (num % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// // Check if a number is positive
// let number = 10;
// if (number > 0) {
//     console.log("The number is positive.");
// }

// // Check if a number is positive or not
// let number = -5;
// if (number > 0) {
//     console.log("The number is positive.");
// } else {
//     console.log("The number is not positive.");
// }

// // Check if a number is positive, negative, or zero
// let number = 0;
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// // Function to check if a number is even
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// // Check if a number is positive and even or odd
// let number = -11;
// if (number > 0) {
//     if (isEven(number)) {
//         console.log("The number is positive and even.");
//     } else {
//         console.log("The number is positive and odd.");
//     }
// } else {
//     console.log("The number is negative or zero");
// }

// // Function to validate age input
// function validateAge() {
//     let age = parseInt(document.getElementById('age').value);

//     if (isNaN(age) || age <= 0) {
//         alert("Please enter a valid age.");
//     } else if (age < 18) {
//         alert("You are a minor.");
//     } else {
//         alert("You are an adult.");
//     }
// }