// if-else Ladder Statement (Choice-Based Problems)

// 1. Leap year or not
let year = 2000;
// Check if the year is a leap year
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year!");
} else {
    console.log("Not Leap Year!");
}

// 2. Prime number
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

let num = 31;
// Check if the number is prime
if (isPrime(num)) {
    console.log("Prime Number!");
} else {
    console.log("Not Prime!");
}

// Function to classify grade based on score
function classifyGrade(score) {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`The grade is: ${grade}`);
}

// Example usage of classifyGrade
classifyGrade(55);

// Function to perform basic arithmetic operations
function calculate(num1, num2, operator) {
    let result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = 'Invalid operator';
    }
    console.log(`The result is: ${result}`);
}

// Example usage of calculate
calculate(10, 5, '+');
calculate(10, 5, '-');
calculate(10, 5, '*');
calculate(10, 5, '/');
calculate(10, 5, '%');