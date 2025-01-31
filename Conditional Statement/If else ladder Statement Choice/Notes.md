### Lecture Notes: `if-else` Ladder Statements in JavaScript

#### Introduction
The `if-else` ladder is a series of `if` and `else if` statements that are used to evaluate multiple conditions. It allows you to execute different blocks of code based on different conditions.

#### Syntax of `if-else` Ladder Statements
The basic syntax of an `if-else` ladder statement is as follows:

```javascript
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else if (condition3) {
    // Code to execute if condition3 is true
} else {
    // Code to execute if none of the conditions are true
}
```

#### Example: Grade Classification

Let's consider an example where we classify grades based on the score of a student.

```javascript
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

// Example usage
classifyGrade(85);
```

#### Explanation:
- **Condition 1**: Checks if the score is greater than or equal to 90. If true, assigns 'A' to `grade`.
- **Condition 2**: Checks if the score is greater than or equal to 80. If true, assigns 'B' to `grade`.
- **Condition 3**: Checks if the score is greater than or equal to 70. If true, assigns 'C' to `grade`.
- **Condition 4**: Checks if the score is greater than or equal to 60. If true, assigns 'D' to `grade`.
- **Else**: If none of the conditions are true, assigns 'F' to `grade`.

#### Practical Application: Basic Calculator

You can create a basic calculator to perform different arithmetic operations using an `if-else` ladder.

```javascript
function calculate(num1, num2, operator) {
    let result;

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

// Example usage
calculate(10, 5, '+');
calculate(10, 5, '-');
calculate(10, 5, '*');
calculate(10, 5, '/');
calculate(10, 5, '%');
```

#### Explanation:
- **Condition 1**: Checks if the operator is '+'. If true, performs addition.
- **Condition 2**: Checks if the operator is '-'. If true, performs subtraction.
- **Condition 3**: Checks if the operator is '*'. If true, performs multiplication.
- **Condition 4**: Checks if the operator is '/'. If true, performs division.
- **Else**: If none of the conditions are true, returns 'Invalid operator'.


For more detailed examples and project instructions, you can refer to the [Basic Calculator project notes](https://github.com/Pawan2505/JavaScript-Batch-9AM/blob/main/Project/Basic%20Calculator/Notes.md).