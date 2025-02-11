# Understanding JavaScript Variables and Data Types

For more details, read the full article on Medium: [Understanding JavaScript Variables and Data Types](https://medium.com/@pawan2505/understanding-javascript-variables-and-data-types-d0e4ad171bab)

## Rules for Variables in JavaScript

1. **Variable Declaration Keywords**:
   - `var`: Function-scoped variable.
   - `let`: Block-scoped variable.
   - `const`: Block-scoped, read-only variable.

2. **Naming Conventions**:
   - Variable names must start with a letter, underscore (`_`), or dollar sign (`$`).
     ```javascript
     let _variable;
     let $variable;
     let variableName;
     ```
   - Subsequent characters can also include digits (0-9), but the first character cannot be a digit.
     ```javascript
     let variable1; // okay
     let 1variable; // not okay
     ```

3. **Case Sensitivity**:
   - JavaScript variable names are case-sensitive.
     ```javascript
     let myVariable;
     let myvariable; // different variable
     ```

4. **Reserved Words**:
   - Do not use reserved words (keywords) as variable names. Examples include `let`, `var`, `const`, `if`, `else`, `for`, `function`, etc.
     ```javascript
     let for; // not okay
     let myVarFor; // okay
     ```

5. **Special Characters**:
   - Variable names cannot contain special characters like `#`, `@`, `&`, `-`, etc.
     ```javascript
     let num#; // not okay
     let num$; // okay
     ```

6. **Underscores and Dollar Signs**:
   - Variable names can contain underscores (`_`) or dollar signs (`$`).
     ```javascript
     let _myVariable;
     let $myVariable;
     ```

7. **Camel Case Convention**:
   - It's a common practice to use camel case for variable names, where the first word is lowercase and subsequent words start with uppercase letters.
     ```javascript
     let myVariableName;
     ```

8. **No Spaces**:
   - Variable names cannot contain spaces.
     ```javascript
     let first name; // not okay
     let firstName; // okay
     ```

## JavaScript Data Types and Variable Declarations

### Variable Declarations: `let`, `const`, `var`
JavaScript provides three keywords to declare variables: `let`, `const`, and `var`.

- **`let`**: Allows you to declare a block-scoped variable.
    ```javascript
    let age = 25;
    ```
- **`const`**: Allows you to declare a block-scoped constant. The value cannot be reassigned.
    ```javascript
    const PI = 3.14;
    ```
- **`var`**: Declares a function-scoped or globally-scoped variable.
    ```javascript
    var name = "John";
    ```

### JavaScript Data Types
JavaScript has 8 distinct data types:

1. **String**: Represents textual data.
    ```javascript
    let name = "Pawan Maurya";
    console.log(name);             // Output: 'Pawan Maurya'
    console.log(typeof name);      // Output: 'string'
    ```
2. **Number**: Represents both integer and floating point numbers.
    ```javascript
    let num = 10;
    console.log(num);              // Output: 10
    console.log(typeof num);       // Output: 'number'
    
    let value = 28.78;
    console.log(value);            // Output: 28.78
    console.log(typeof value);     // Output: 'number'
    ```
3. **Bigint**: Used for arbitrarily large integers.
    ```javascript
    let num2 = 1234567n;
    console.log(num2);             // Output: 1234567n
    console.log(typeof num2);      // Output: 'bigint'
    ```
4. **Boolean**: Represents true or false values.
    ```javascript
    let isvalue = true;
    console.log(isvalue);          // Output: true
    console.log(typeof isvalue);   // Output: 'boolean'
    ```
5. **Undefined**: A variable that has been declared but not assigned a value.
    ```javascript
    let num1;
    console.log(num1);             // Output: undefined
    console.log(typeof num1);      // Output: 'undefined'
    ```
6. **Null**: Represents the intentional absence of any object value.
    ```javascript
    let x = null;
    console.log(x);                // Output: null
    console.log(typeof x);         // Output: 'object' (this is a known bug in JavaScript)
    ```
7. **Symbol**: A unique and immutable value.
    ```javascript
    let num4 = Symbol(12345);
    console.log(num4.toString());  // Output: 'Symbol(12345)'
    console.log(typeof num4);      // Output: 'symbol'
    ```
8. **Object**: A collection of properties.
    ```javascript
    let sejal = {name: "Sejal", age: 123, salary: 100000000};
    console.log(sejal);            // Output: {name: "Sejal", age: 123, salary: 100000000}
    console.log(typeof sejal);     // Output: 'object'
    ```

### Arrays
Arrays are a special type of object used to store multiple values in a single variable.
```javascript
let brr = [];                  // Empty array
let arr = [10, 20, 30, 40, 50];
console.log(arr);              // Output: [10, 20, 30, 40, 50]
console.log(typeof arr);       // Output: 'object'
```

### Practical Exercises
1. Declare a variable using `let` and assign it a string value. Log the value and its type.
2. Create an array of numbers and log the array and its type.
3. Declare a constant using `const` and try to reassign it. Observe the error.
