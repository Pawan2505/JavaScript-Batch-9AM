### Lecture Notes: Nested `if-else` Statements in JavaScript

#### Introduction
Nested `if-else` statements are used when you need to make multiple decisions based on different conditions. They allow you to include one `if-else` statement inside another `if-else` statement.

#### Syntax of Nested `if-else` Statements
The basic syntax of a nested `if-else` statement is as follows:

```javascript
if (condition1) {
    // Code to execute if condition1 is true
    if (condition2) {
        // Code to execute if condition2 is true
    } else {
        // Code to execute if condition2 is false
    }
} else {
    // Code to execute if condition1 is false
    if (condition3) {
        // Code to execute if condition3 is true
    } else {
        // Code to execute if condition3 is false
    }
}
```

#### Example: Finding Minimum and Maximum Values

Let's consider an example where we need to determine the minimum and maximum values from three numbers using nested `if-else` statements.

```javascript
function findMinMax(a, b, c) {
    let min, max;

    // Finding the minimum value
    if (a < b) {
        if (a < c) {
            min = a;
        } else {
            min = c;
        }
    } else {
        if (b < c) {
            min = b;
        } else {
            min = c;
        }
    }

    // Finding the maximum value
    if (a > b) {
        if (a > c) {
            max = a;
        } else {
            max = c;
        }
    } else {
        if (b > c) {
            max = b;
        } else {
            max = c;
        }
    }

    console.log(`Minimum value is ${min}`);
    console.log(`Maximum value is ${max}`);
}

// Example usage
findMinMax(5, 8, 2);
```

#### Explanation:
- **Finding Minimum Value**:
  - The outer `if` checks if `a` is less than `b`.
  - If true, the inner `if` checks if `a` is also less than `c`. If true, `a` is the minimum; otherwise, `c` is the minimum.
  - If the outer `if` is false, the inner `else` checks if `b` is less than `c`. If true, `b` is the minimum; otherwise, `c` is the minimum.
- **Finding Maximum Value**:
  - The outer `if` checks if `a` is greater than `b`.
  - If true, the inner `if` checks if `a` is also greater than `c`. If true, `a` is the maximum; otherwise, `c` is the maximum.
  - If the outer `if` is false, the inner `else` checks if `b` is greater than `c`. If true, `b` is the maximum; otherwise, `c` is the maximum.

#### Practical Application: Interactive Web Application

You can create an interactive web application to find the minimum and maximum values from a list of numbers entered by the user.

```javascript
function findMin() {
    let arr = document.getElementById('input-1').value.split(',').map(Number);
    let min = Math.min(...arr);
    document.querySelector('#answer').innerHTML = `Minimum Number: ${min}`;
}

function findMax() {
    let arr = document.getElementById('input-1').value.split(',').map(Number);
    let max = Math.max(...arr);
    document.querySelector('#answer').innerHTML = `Maximum Number: ${max}`;
}
```


For more details and practical examples, you can refer to the [Min & Max Value Finder project notes](https://github.com/Pawan2505/JavaScript-Batch-9AM/blob/main/Project/Simple%20Interest%20Calculator/Notes.md).