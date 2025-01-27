
// Declare variables using let, const, var
// JavaScript has 8 data types: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

// Number data type
let num = 10;
console.log(num);              // Output: 10
console.log(typeof num);       // Output: 'number'

// String data type
let name = "Pawan Maurya";
console.log(name);             // Output: 'Pawan Maurya'
console.log(typeof name);      // Output: 'string'

// Boolean data type
let isvalue = true;
console.log(isvalue);          // Output: true
console.log(typeof isvalue);   // Output: 'boolean'

// Null data type
let x = null;
console.log(x);                // Output: null
console.log(typeof x);         // Output: 'object' (this is a known bug in JavaScript)

// Undefined data type
let num1;
console.log(num1);             // Output: undefined
console.log(typeof num1);      // Output: 'undefined'

// Array (object type)
let brr = [];                  // Empty array
let arr = [10, 20, 30, 40, 50];
console.log(arr);              // Output: [10, 20, 30, 40, 50]
console.log(typeof arr);       // Output: 'object'

// Floating point number
let value = 28.78;
console.log(value);            // Output: 28.78
console.log(typeof value);     // Output: 'number'

// Bigint data type
let num2 = 1234567n;
console.log(num2);             // Output: 1234567n
console.log(typeof num2);      // Output: 'bigint'

// Symbol data type
let num4 = Symbol(12345);
console.log(num4.toString());  // Output: 'Symbol(12345)'
console.log(typeof num4);      // Output: 'symbol'

// Object data type
let sejal = {name: "Sejal", age: 123, salary: 100000000};
console.log(sejal);            // Output: {name: "Sejal", age: 123, salary: 100000000}
console.log(typeof sejal);     // Output: 'object'