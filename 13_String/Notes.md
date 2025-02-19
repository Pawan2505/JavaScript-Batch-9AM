### **📌 Strings in JavaScript**  
// Strings are **immutable**, meaning we **cannot modify** the original string directly.  

```js
// Declaring a string
let name = "Pawan Maurya";

// Accessing characters using index
console.log(name[0]); // Output: P
console.log(name[3]); // Output: a
console.log(name[5]); // Output: n

// Iterating over each character using a for...of loop
for (let element of name) {
    console.log(element);
}
```

---

### **📌 Converting String to Array for Iteration**  
// We cannot use `.forEach()` on a string directly, so we convert it to an array first.  

```js
// Solution 1: Using Array.from()
Array.from(name).forEach(element => {
    console.log(element);
});
```

---

### **📌 String Methods in JavaScript**  

```js
// Replacing part of a string
let replacestr = name.replace("Maurya", "Sir");
console.log(replacestr); // Output: Pawan Sir

// Getting character at a specific index
console.log(name.charAt(2)); // Output: w

// Finding the index of a character
console.log(name.indexOf('w')); // Output: 2

// Extracting a portion of the string
console.log(name.substr(0, 4)); // Output: Pawa (deprecated, prefer slice)
console.log(name.substring(6, 13)); // Output: Maurya

// Changing case
console.log(name.toLowerCase()); // Output: pawan maurya
console.log(name.toUpperCase()); // Output: PAWAN MAURYA
```

---

### **📌 Trimming Whitespace in Strings**  

```js
let programming = "     Javascript Language   ";
console.log(programming); // Output: "     Javascript Language   "
console.log(programming.trim()); // Output: "Javascript Language"
```

---

### **📌 Converting Arrays to Strings and Vice Versa**  

```js
let arr = [10, 20, 30];

// Joining array elements into a string and then splitting back into an array
console.log(arr.join().split(",")); // Output: ['10', '20', '30']

// Checking data type after using join()
console.log(typeof arr.join()); // Output: string
```

---

### **📌 String Concatenation**  

```js
let str1 = "Pawan"; 
let str2 = "Maurya";

// Using the + operator
let result = str1 + " " + str2;
console.log(result); // Output: Pawan Maurya

// Using concat() method
console.log(str1.concat(" ", str2)); // Output: Pawan Maurya
```

---

### **📌 Type Coercion in JavaScript**  

```js
// String + Number → String (Implicit Type Conversion)
let sum = '5' + 10; 
console.log(sum); // Output: "510"
console.log(typeof sum); // Output: string

// Number + Number + String → String
let add = 12 + 5 + "number";
console.log(add); // Output: "17number"

// String + Number + Number → String
let add2 = "number" + 12 + 5;
console.log(`Result : ${add2}`); // Output: "Result : number125"
```

---

