## Lecture Notes on JavaScript Operators

### Comparison with Type Coercion
JavaScript provides two types of equality operators: `==` and `===`.

```javascript
let x = 123;
let y = "123";

console.log(x == y);  // true => Equality with type coercion
console.log(x === y); // false => Strict equality (type and value)
```

- `==` checks for equality with type coercion (converts types if needed).
- `===` checks for strict equality without type coercion (more secure).

### Not Equal to Operator
Similar to equality, JavaScript provides two types of not equal to operators: `!=` and `!==`.

```javascript
console.log(x != y);  // false => Not equal with type coercion
console.log(x !== y); // true  => Strict inequality (type and value)
```

### Comparison Operators
These operators compare two values and return a boolean.

```javascript
let num1 = 11;
let num2 = 20;

console.log(num1 > num2);  // false => Greater than
console.log(num1 < num2);  // true  => Less than
console.log(num1 >= num2); // false => Greater than or equal to
console.log(num1 <= num2); // true  => Less than or equal to
console.log(num1 == num2); // false => Equality with type coercion
console.log(num1 === num2);// false => Strict equality
```

### Arithmetic Operators
These operators perform mathematical operations.

```javascript
console.log(num1 + num2); // 31 => Addition
console.log(num1 - num2); // -9 => Subtraction
console.log(num1 * num2); // 220 => Multiplication
console.log(num1 / num2); // 0.55 => Division
console.log(num1 % num2); // 11  => Modulus (remainder)

let num3 = 2;
let num4 = 3;

console.log(num3 ** num4); // 8 => Exponentiation
```

### Unary Operators
Unary operators operate on a single operand.

```javascript
let a = 10;

console.log(a++); // 10 => Post-increment
console.log(a);   // 11 => Updated value after increment

a = 10;

console.log(++a); // 11 => Pre-increment
console.log(a);   // 11 => Updated value after increment

a = 10;

console.log(a--); // 10 => Post-decrement
console.log(a);   // 9  => Updated value after decrement

a = 10;

console.log(--a); // 9  => Pre-decrement
console.log(a);   // 9  => Updated value after decrement
```

### Assignment Operators
These operators assign values to variables.

```javascript
let num = 10;

console.log(num); // 10 => Initial value

num += 20;        // Addition assignment
console.log(num); // 30 => Updated value
```

### Logical Operators
Logical operators are used to perform logical operations.

```javascript
let b = 20;
let c = 30;

console.log(a > b && a > c); // false => Logical AND
console.log(a < b && a < c); // true  => Logical AND
console.log(a > b && a < c); // false => Logical AND

console.log(a > b || a > c);  // false => Logical OR
console.log(a < b || a < c);  // true  => Logical OR
console.log(a > b || a < c);  // true  => Logical OR

console.log(!(a > b || a > c));  // true  => Logical NOT
console.log(!(a < b || a < c));  // false => Logical NOT
console.log(!(a > b || a < c));  // false => Logical NOT
```

```markdown
For more details, read the full article on Medium: [Understanding JavaScript Operators](https://medium.com/@pawan2505/understanding-javascript-operators-0b5e39859ed3)
```
