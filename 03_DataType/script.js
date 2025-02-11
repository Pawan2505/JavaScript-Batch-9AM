
/// Notes on variable declarations

// 1. var (ES5)
// - Scope: global
// - Can be declared multiple times
// - Lower security
// - Can be initialized multiple times
// - Variables can be redeclared

// 2. let (ES6)
// - Scope: block-level
// - Can only be declared once
// - Higher security compared to `var`
// - Can be initialized multiple times

// 3. const (ES6)
// - Scope: block-level
// - Highest security among the three
// - Can only be initialized once at the time of declaration
// - Must be declared and initialized on the same line



// Example using "var"

// First declaration
var num = 10; 

// Different ways to print the value of num
console.log(`Value: ${num} number`);
console.log("Value: ", num);
console.log("Value: " + num);
console.log("Value: " + num + " number");

// Redeclaration of num
var num = 20; 

// Printing the updated value of num
console.log(`Value: ${num} number`);

// Global variable num1
var num1 = 50;

// Accessing num1 inside a block
{
    console.log(num1); // prints 50
}

// Accessing num1 outside the block
console.log(num1); // prints 50

// Block-scoped variable using var (not truly block-scoped)
{
    var num2 = 500;
}

// Accessing num2 outside the block (still accessible)
console.log(num2); // prints 500

// Example using "let"

let num3 = 1000;
console.log(num3); // prints 1000

{
    console.log(num3); // prints 1000 because num3 is global within this scope
}

// Example of block-scoped let variable
{
    let num4 = 2000; // num4 is only accessible within this block
}
// console.log(num4); // Error: num4 is not defined

{
    let num4 = 2000;  // block scope variable
    {
        console.log(num4);  // prints 2000 because num4 is in an outer block
    }
}

// Re-declaration of let variable (not allowed)
let num5 = 300;
console.log(num5); // prints 300

// let num5 = 400; // Error: num5 has already been declared

// Taking user input using prompt
// let number = prompt("Enter Number : "); 
// console.log(number); 
// console.log(typeof number); // prints "string"

// Taking user input and converting to an integer
// let number = parseInt(prompt("Enter Number : "));
// console.log(number); 
// console.log(typeof number); // prints "number" if input can be parsed as an integer

// Example using "const"

// const num6;
// num6 = 10; // Error: const variables must be initialized at the time of declaration
// console.log(num6); 

const num7 = 10; // Correct initialization
console.log(num7); // prints 10

// const num7 = 10; // Error: num7 has already been declared
// num7 = 20; // Error: Cannot reassign a const variable
// console.log(num7);

const num8 = parseInt(prompt("Enter Number:")); // const variable with user input, initialized on the same line
console.log(num8);

{
    const value = 200; // block-scoped variable
    console.log(value); // prints 200
}
// console.log(value); // Error: value is not defined

{
    const num9 = 100;
    {
        console.log(num9); // prints 100, because num9 is in an outer block
    }
}
