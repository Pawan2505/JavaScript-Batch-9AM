### Lecture Notes: Understanding the `if` Statement in JavaScript

#### Introduction
The `if` statement is a fundamental building block in JavaScript used for decision-making. It allows your code to execute certain sections conditionally, based on whether a specified condition is true or false.

#### Syntax of `if` Statement
The basic syntax of an `if` statement is as follows:

```javascript
if (condition) {
    // Code to execute if the condition is true
}
```

#### Example 1: Basic `if` Statement
Let's start with a simple example to check if a number is positive:

```javascript
let number = 10;

if (number > 0) {
    console.log("The number is positive.");
}
```

#### Explanation:
- **Condition**: `number > 0` checks if the number is greater than 0.
- **Block of Code**: If the condition is true, the message "The number is positive." will be printed to the console.

#### Example 2: Using `if-else` Statement
The `if-else` statement provides an alternative code block that executes if the condition is false:

```javascript
let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}
```

#### Explanation:
- **`else` Block**: Executes when the `if` condition is false.

#### Example 3: Using `if-else if-else` Statement
For multiple conditions, you can use `if-else if-else` statements:

```javascript
let number = 0;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
```

#### Explanation:
- **Multiple Conditions**: Checks if the number is positive, negative, or zero.

#### Example 4: Nested `if` Statements
You can also nest `if` statements within each other:

```javascript
let number = 10;
let isEven = true;

if (number > 0) {
    if (isEven) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
}
```

#### Explanation:
- **Nested `if`**: The inner `if` checks if the number is even or odd after confirming it is positive.

#### Practical Application: Checking User Input

```javascript
function validateAge() {
    let age = parseInt(document.getElementById('age').value);

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
    } else if (age < 18) {
        alert("You are a minor.");
    } else {
        alert("You are an adult.");
    }
}
```

#### Explanation:
- **Validating Input**: Checks if the input is a valid number and then determines if the user is a minor or an adult.

#### Best Practices
- Always ensure conditions are meaningful and clear.
- Avoid deep nesting by using logical operators (`&&`, `||`) where possible.
- Use `else` and `else if` to handle different cases effectively.
