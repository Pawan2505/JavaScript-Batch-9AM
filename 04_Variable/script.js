// num = 10;
// console.log(num);
// let num;

// Rules of variable

let num123 = 10;
console.log(num123);

// let 123num = 10;   // Not ok
// console.log(123num);

// let first name = "Pawan";  // Not ok 
let first_name = "Pawan";  // Correct
console.log(first_name);

// let #num = 10; // Not ok
let _num = 10; // Correct
console.log(_num);
let $num = 10; // Correct
console.log($num);

// let if = 10;  // Not ok

let num = 10;
let Num = 20; 
console.log(num);
console.log(Num);



let name = "Pawan";
console.log(name);

name[0] = "h";
// string are immutable it can not change
console.log(name);  // "Pawan"


// Original string
let greeting = "Hello";

// Attempts to modify the string directly
greeting[0] = "h";

// string to show it remains unchanged
console.log(greeting); // Outputs: "Hello"

// Creating a new string to achieve the change
let newGreeting = "h" + greeting.slice(1);

// Logging the new string to show the change
console.log(newGreeting); // Outputs: "hello"
