
[Understanding JavaScript Variables and Data Types](https://medium.com/@pawan2505/understanding-javascript-variables-and-data-types-d0e4ad171bab)


## Rules for Variables in JavaScript

1. **Variable Declaration Keywords**:

   - `var`: Function-scoped variable.
   - `let`: Block-scoped variable.
   - `const`: Block-scoped, read-only variable.

2. **Naming Conventions**:

   - Variable names must start with a letter, underscore (\_), or dollar sign ($).
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

   - Variable names can contain underscores (\_) or dollar signs ($).
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
