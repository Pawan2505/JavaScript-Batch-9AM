// // Comparison with type coercion
// let x = 123;          // Declaration and initialization of a number variable
// let y = "123";        // Declaration and initialization of a string variable

// console.log(x == y);  // true => Equality with type coercion (less strict)
// console.log(x === y); // false => Strict equality (type and value) with no type coercion (more secure)

// // Not equal to operator
// let x = 123;          // Declaration and initialization of a number variable
// let y = "123";        // Declaration and initialization of a string variable

// console.log(x != y);  // false => Not equal with type coercion (less strict)
// console.log(x !== y); // true => Strict inequality (type and value) with no type coercion (more secure)

// // Comparison operators
// let num1 = 11;        // Declaration and initialization of a number variable
// let num2 = 20;        // Declaration and initialization of another number variable

// console.log(num1 > num2);  // false => Greater than
// console.log(num1 < num2);  // true  => Less than
// console.log(num1 >= num2); // false => Greater than or equal to
// console.log(num1 <= num2); // true  => Less than or equal to
// console.log(num1 == num2); // false => Equality with type coercion
// console.log(num1 === num2);// false => Strict equality

// // Arithmetic operators
// let num1 = 11;        // Declaration and initialization of a number variable
// let num2 = 20;        // Declaration and initialization of another number variable

// console.log(num1 + num2); // 31 => Addition
// console.log(num1 - num2); // -9 => Subtraction
// console.log(num1 * num2); // 220 => Multiplication
// console.log(num1 / num2); // 0.55 => Division
// console.log(num1 % num2); // 11 => Modulus (remainder)

// let num3 = 2;          // Declaration and initialization of a number variable
// let num4 = 3;          // Declaration and initialization of another number variable

// console.log(num3 ** num4); // 8 => Exponentiation

// // Unary operators
// let a = 10;            // Declaration and initialization of a number variable

// console.log(a++);      // 10 => Post-increment (returns current value, then increments by 1)
// console.log(a);        // 11 => Updated value after increment

// let a = 10;            // Re-declaration of the variable for demonstration

// console.log(++a);      // 11 => Pre-increment (increments by 1, then returns value)
// console.log(a);        // 11 => Updated value after increment

// let a = 10;            // Re-declaration of the variable for demonstration

// console.log(a--);      // 10 => Post-decrement (returns current value, then decrements by 1)
// console.log(a);        // 9  => Updated value after decrement

// let a = 10;            // Re-declaration of the variable for demonstration

// console.log(--a);      // 9  => Pre-decrement (decrements by 1, then returns value)
// console.log(a);        // 9  => Updated value after decrement

// // Assignment operators
// let num = 10;          // Declaration and initialization of a number variable

// console.log(num);      // 10 => Initial value

// num += 20;             // Addition assignment (equivalent to num = num + 20)
// console.log(num);      // 30 => Updated value after addition assignment

// // Logical operators
// let a = 10;            // Declaration and initialization of a number variable
// let b = 20;            // Declaration and initialization of another number variable
// let c = 30;            // Declaration and initialization of another number variable

// console.log(a > b && a > c); // false => Logical AND (both conditions must be true)
// console.log(a < b && a < c); // true  => Logical AND (both conditions must be true)
// console.log(a > b && a < c); // false => Logical AND (both conditions must be true)

// let a = 10;            // Re-declaration of the variable for demonstration
// let b = 20;            // Re-declaration of another number variable
// let c = 30;            // Re-declaration of another number variable

// console.log(a > b || a > c);  // false => Logical OR (at least one condition must be true)
// console.log(a < b || a < c);  // true  => Logical OR (at least one condition must be true)
// console.log(a > b || a < c);  // true  => Logical OR (at least one condition must be true)

// let a = 10;            // Re-declaration of the variable for demonstration
// let b = 20;            // Re-declaration of another number variable
// let c = 30;            // Re-declaration of another number variable

// console.log(!(a > b || a > c));  // true  => Logical NOT (negates the condition)
// console.log(!(a < b || a < c));  // false => Logical NOT (negates the condition)
// console.log(!(a > b || a < c));  // false => Logical NOT (negates the condition)
