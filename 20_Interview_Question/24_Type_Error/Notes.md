### **Types of Errors in JavaScript**

1. **Syntax Error**  
   - Occurs when there is a mistake in the structure of the code, such as missing parentheses, semicolons, or incorrect syntax.
   
   **Example**:
   ```javascript
   // Missing closing parenthesis
   console.log("Hello World"
   ```
   - The code will throw a syntax error because the closing parenthesis is missing.

---

2. **Reference Error**  
   - Happens when you try to access a variable that has not been declared or is out of scope.
   
   **Example**:
   ```javascript
   // Trying to access a variable that is not defined
   console.log(x);
   ```
   - This will throw a **ReferenceError** since `x` has not been declared.

---

3. **Type Error**  
   - Occurs when a value is not of the expected type or a method is called on an inappropriate type (e.g., calling a property on `undefined` or `null`).
   
   **Example**:
   ```javascript
   let a;
   // 'a' is undefined, so trying to access 'name' will throw an error
   console.log(a.name);
   ```
   - This will throw a **TypeError** because `a` is `undefined`, and you can't access properties on `undefined`.

---

4. **Range Error**  
   - Happens when a value is not in an acceptable range (for example, array lengths or numbers out of bounds).
   
   **Example**:
   ```javascript
   let arr = new Array(-3);
   // Creating an array with a negative length throws a RangeError
   console.log(arr);
   ```
   - This will throw a **RangeError** because array lengths cannot be negative.

---
