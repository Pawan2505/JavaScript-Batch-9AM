
// Prompt the user for input and store it as a string
let num = prompt("Enter Number:");
document.writeln(num); // Output the input
document.writeln(typeof num); // Check the type (string)

// Convert the string to an integer using parseInt()
num = parseInt(prompt("Enter Number:"));
document.writeln(num); // Output the integer
document.writeln(typeof num); // Check the type (number)

// Convert the string to a floating-point number using parseFloat()
num = parseFloat(prompt("Enter Number:"));
document.writeln(num); // Output the float
document.writeln(typeof num); // Check the type (number)

// Example of a number variable
let num4 = 123;
console.log(num4); // Output the number
console.log(typeof num4); // Check the type (number)

// Convert the number to a string using toString()
console.log(num4.toString()); // Output the string
console.log(typeof num4.toString()); // Check the type (string)

// Check the type of the original number
console.log(typeof num4); // Should still be a number
