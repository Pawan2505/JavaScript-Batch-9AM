### **`eval()` Function in JavaScript**

- **Definition**: `eval()` is a built-in JavaScript function that evaluates a string as JavaScript code and dynamically executes it.

---

### **Example**:

```javascript
let x = 10;
let y = 20;

const result = "x + y";

console.log(result);  // Output: "x + y"

console.log(eval(result));  // Output: 30
```

---

### **Key Points**:
- `eval()` executes the string as if it were JavaScript code.
- **Security Risk**: Avoid using `eval()` with untrusted input to prevent security vulnerabilities.
- **Performance Impact**: It can reduce performance because JavaScript engines can't optimize dynamically evaluated code as well.

---
