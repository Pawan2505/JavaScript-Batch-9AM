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

Here is the final code with comments:

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

I'll now update the `Notes.md` file in your repository with these notes.It seems that the `Notes.md` file in your repository is currently empty. I will create detailed notes on the concepts discussed in your JavaScript code example. Here is the content in markdown format:

```markdown
# Notes on JavaScript Type Conversion

## Prompt User Input
The `prompt()` function is used to get input from the user. This input is always of type `string` by default.

```javascript
let num = prompt("Enter Number:");
document.writeln(num); // Output the input
document.writeln(typeof num); // Check the type (string)
```

## Converting String to Integer
To convert a string to an integer, use the `parseInt()` function. This function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```javascript
let num = parseInt(prompt("Enter Number:"));
document.writeln(num); // Output the integer
document.writeln(typeof num); // Check the type (number)
```

## Converting String to Float
To convert a string to a floating-point number, use the `parseFloat()` function. This function parses a string argument and returns a floating-point number.

```javascript
let num = parseFloat(prompt("Enter Number:"));
document.writeln(num); // Output the float
document.writeln(typeof num); // Check the type (number)
```

## Example of a Number Variable
A number variable can be declared and initialized as shown below. The `typeof` operator can be used to check the type of the variable.

```javascript
let num4 = 123;
console.log(num4); // Output the number
console.log(typeof num4); // Check the type (number)
```

## Converting Number to String
To convert a number to a string, use the `toString()` method. This method returns a string representing the specified number.

```javascript
console.log(num4.toString()); // Output the string
console.log(typeof num4.toString()); // Check the type (string)
```

## Full Example Code
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
```

I will now update the `Notes.md` file in your repository with these notes.Here's the detailed note on the concepts discussed in your JavaScript code example:

# Notes on JavaScript Type Conversion

## Prompt User Input
### Theory
The `prompt()` function in JavaScript is used to display a dialog box that prompts the user for input. The input provided by the user is returned as a string.

### Example
```javascript
let num = prompt("Enter Number:");
document.writeln(num); // Output the input
document.writeln(typeof num); // Check the type (string)
```

## Converting String to Integer
### Theory
The `parseInt()` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). It is useful for converting strings to numbers when the input is expected to be an integer.

### Example
```javascript
let num = parseInt(prompt("Enter Number:"));
document.writeln(num); // Output the integer
document.writeln(typeof num); // Check the type (number)
```

## Converting String to Float
### Theory
The `parseFloat()` function parses a string argument and returns a floating-point number. It is useful for converting strings to numbers when the input is expected to be a floating-point number.

### Example
```javascript
let num = parseFloat(prompt("Enter Number:"));
document.writeln(num); // Output the float
document.writeln(typeof num); // Check the type (number)
```

## Example of a Number Variable
### Theory
In JavaScript, numbers are a primitive data type. You can declare and initialize a number variable to store numeric values.

### Example
```javascript
let num4 = 123;
console.log(num4); // Output the number
console.log(typeof num4); // Check the type (number)
```

## Converting Number to String
### Theory
The `toString()` method converts a number to a string. This is useful when you need to convert numeric data into a string format for display or further processing.

### Example
```javascript
console.log(num4.toString()); // Output the string
console.log(typeof num4.toString()); // Check the type (string)
```

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

