## Lecture Notes: While Loop and Do While Loop in JavaScript

### Introduction
The `while` and `do while` loops are control flow statements that allow code to be executed repeatedly based on a condition. The primary difference between them is when the condition is evaluated.

### While Loop
A `while` loop repeatedly executes a block of code as long as a specified condition is `true`.

#### Syntax
```javascript
while (condition) {
    // Code to be executed
}
```

#### Example
Here’s an example of a `while` loop that prints numbers from 1 to 5:

```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

#### Detailed Breakdown
1. **Initialization**: `let i = 1`
   - A variable `i` is initialized to 1.
2. **Condition**: `i <= 5`
   - Before each iteration, the condition is checked. If it is `true`, the loop body is executed. If it is `false`, the loop terminates.
3. **Increment**: `i++`
   - After each iteration, the counter variable `i` is incremented by 1.

### Do While Loop
A `do while` loop is similar to a `while` loop, but it guarantees that the code block is executed at least once.

#### Syntax
```javascript
do {
    // Code to be executed
} while (condition);
```

#### Example
Here’s an example of a `do while` loop that prints numbers from 1 to 5:

```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

#### Detailed Breakdown
1. **Initialization**: `let i = 1`
   - A variable `i` is initialized to 1.
2. **Code Block Execution**: `console.log(i); i++;`
   - The code block is executed at least once.
3. **Condition**: `i <= 5`
   - After each iteration, the condition is checked. If it is `true`, the loop body is executed again. If it is `false`, the loop terminates.

### Practical Applications

#### While Loop: Finding the Sum of Digits
```javascript
let number = 12345;
let sum = 0;
while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log('Sum of digits:', sum);
```

#### Do While Loop: User Input Validation
```javascript
let userInput;
do {
    userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);
console.log("You entered:", userInput);
```

### Common Mistakes
1. **Infinite Loop**
   - Forgetting to update the counter variable can lead to an infinite loop.
   ```javascript
   let i = 0;
   while (i < 5) {
       console.log(i); // Missing i++
   }
   ```

2. **Off-By-One Errors**
   - Incorrectly setting the loop condition can lead to off-by-one errors.
   ```javascript
   let i = 0;
   while (i <= 5) { // This will run 6 times
       console.log(i);
       i++;
   }
   ```

### Best Practices
- **Use Descriptive Variable Names**: Instead of using single letters like `i`, use descriptive names like `counter`.
- **Avoid Complex Conditions**: Keep the loop conditions simple and readable.
- **Ensure Termination Condition**: Always ensure that the loop has a clear and achievable termination condition to avoid infinite loops.

Understanding the `while` and `do while` loops and their differences is essential for writing efficient and effective JavaScript code. These loops are particularly useful when the number of iterations is not known beforehand.

For further reading, check out this [Medium article](https://medium.com/@pawan2505/mastering-javascript-loops-1687e359c8e5).
