### Lecture Notes on JavaScript Type Conversion

#### Prompt User Input
The `prompt()` function is used to display a dialog box that prompts the user for input. The input is always returned as a string. This function is useful for getting user input in a simple and straightforward manner.

Example:
```javascript
let num = prompt("Enter Number:");
document.writeln(num); // Output the input
document.writeln(typeof num); // Check the type (string)
```

#### Converting String to Integer
The `parseInt()` function parses a string argument and returns an integer. It is useful when you need to convert a string that represents a whole number into an actual number type.

Example:
```javascript
let num = parseInt(prompt("Enter Number:"));
document.writeln(num); // Output the integer
document.writeln(typeof num); // Check the type (number)
```

#### Converting String to Float
The `parseFloat()` function parses a string argument and returns a floating-point number. It is useful when you need to convert a string that represents a decimal number into an actual number type.

Example:
```javascript
let num = parseFloat(prompt("Enter Number:"));
document.writeln(num); // Output the float
document.writeln(typeof num); // Check the type (number)
```

#### Example of a Number Variable
In JavaScript, you can declare and initialize a variable with a number. This is a basic concept that shows how to work with numeric data types.

Example:
```javascript
let num4 = 123;
console.log(num4); // Output the number
console.log(typeof num4); // Check the type (number)
```

#### Converting Number to String
The `toString()` method converts a number to a string. This is useful when you need to work with number data as text.

Example:
```javascript
console.log(num4.toString()); // Output the string
console.log(typeof num4.toString()); // Check the type (string)
```

### Full Example Code
Here is the complete example code with comments:

```javascript
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
```
