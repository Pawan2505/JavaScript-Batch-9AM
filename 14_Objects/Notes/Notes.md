# **Lecture Notes: Introduction to JavaScript Objects**  
---

## **📌 Learning Objectives**  
By the end of this lecture Notes, you will be able to:  
✅ Understand what JavaScript objects are and why they are used.  
✅ Learn how to create and access object properties and methods.  
✅ Understand how arrays and objects work together.  
✅ Loop through an array of objects and apply conditions.  
✅ Create a small project to generate dynamic quotes.  

---

## **📝 Lecture Notes Flow (From Basic to Advanced)**  
### **1️⃣ What is an Object in JavaScript? (Basic)**
### **2️⃣ Object Properties and Methods**
### **3️⃣ Objects with Arrays**
### **4️⃣ Looping Through an Array of Objects**
### **5️⃣ Accessing Objects with Conditions**
### **6️⃣ Hands-on Project: Making a Random Quote Generator**
---

# **🔹 1. What is an Object in JavaScript?**  
### **❓ Why Do We Need Objects?**
- In JavaScript, objects are **used to store related data together** in a structured way.  
- Instead of creating multiple variables, we can **store data as key-value pairs** inside an object.  

✅ **Example Without an Object (Using Multiple Variables)**  
```js
let name = "Rahul";
let age = 21;
let course = "BCA";
```
This approach is inefficient because we need **many variables** to store related data.

✅ **Example Using an Object**
```js
const student = {
    name: "Rahul",
    age: 21,
    course: "BCA"
};
console.log(student);
```
🔹 **Objects make it easy to group related information together.**

---

# **🔹 2. Object Properties and Methods**
### **📌 Properties in Objects**
- An object has **properties** that store values.  
- Each property has a **key (name)** and a **value**.  
- The values can be **strings, numbers, booleans, arrays, or even other objects**.

✅ **Example of Object Properties**  
```js
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};
console.log(car.brand);  // Output: Toyota
console.log(car["model"]); // Output: Camry
```

### **📌 Methods in Objects**
- A method is a function **inside** an object.  
- It is used to perform **actions** related to that object.  

✅ **Example of Object Method**
```js
const person = {
    name: "Aman",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Output: Hello, my name is Aman
```

🔹 **`this` keyword** refers to the current object.

---

# **🔹 3. Objects with Arrays**
- Objects can **store arrays** as values.  
- **Arrays can also store multiple objects.**  

✅ **Example: Object Containing an Array**
```js
const student = {
    name: "Riya",
    subjects: ["Math", "English", "Science"]
};
console.log(student.subjects[1]); // Output: English
```

✅ **Example: Array of Objects**
```js
const students = [
    { name: "Amit", age: 20 },
    { name: "Sara", age: 22 },
    { name: "Kunal", age: 21 }
];
console.log(students[1].name); // Output: Sara
```

---

# **🔹 4. Looping Through an Array of Objects**
- When we store objects inside an array, we need to **loop through them** to access each object’s properties.

✅ **Using `forEach()`**
```js
students.forEach(student => {
    console.log(student.name + " is " + student.age + " years old.");
});
```

✅ **Using `for...of`**
```js
for (let student of students) {
    console.log(student.name);
}
```

✅ **Using `map()` to Extract Data**
```js
const names = students.map(student => student.name);
console.log(names); // Output: ["Amit", "Sara", "Kunal"]
```

---

# **🔹 5. Accessing Objects with Conditions**
- We can use **conditions** to filter or find objects inside an array.

✅ **Finding a Student by Name**
```js
const studentFound = students.find(student => student.name === "Sara");
console.log(studentFound);
```

✅ **Finding Students Above 21 Years**
```js
const adultStudents = students.filter(student => student.age > 21);
console.log(adultStudents);
```

✅ **Checking If Any Student is Below 18**
```js
const hasMinor = students.some(student => student.age < 18);
console.log(hasMinor ? "Some students are under 18." : "All students are adults.");
```

---

# **🔹 6. Hands-on Project: Making a Random Quote Generator**
### **✅ Goal:** Display a random quote when a button is clicked.

### **Step 1: Create an Array of Quote Objects**
```js
const quotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Stay positive, work hard, make it happen.", author: "Anonymous" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
];
```

### **Step 2: Function to Generate a Random Quote**
```js
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
```

### **Step 3: Display the Quote in Console**
```js
function displayQuote() {
    const quote = getRandomQuote();
    console.log(`"${quote.text}" - ${quote.author}`);
}

displayQuote();
```

✅ **HTML**
```html
<button onclick="showQuote()">Generate Quote</button>
<p id="quote-text"></p>
<p id="quote-author"></p>

<script>
    function showQuote() {
        const quote = getRandomQuote();
        document.getElementById("quote-text").innerText = `"${quote.text}"`;
        document.getElementById("quote-author").innerText = `- ${quote.author}`;
    }
</script>
```

---

# **🔑Note:**
✔️ **Objects** store data in key-value pairs.  
✔️ **Properties** hold values, and **methods** define actions.  
✔️ **Objects inside arrays** help organize complex data.  
✔️ **Looping** allows us to access objects efficiently.  
✔️ **Conditional filtering** helps us find specific objects.  
✔️ **We built a dynamic quote generator using objects and arrays.**  

---

## **📝 Assignment**
1️⃣ Create an **array of employees** with `name`, `position`, and `salary`.  
2️⃣ Write a function to **filter employees earning more than 5000**.  
3️⃣ Write a function to **find an employee by name**.  
4️⃣ Create a **table in HTML** to display employee details dynamically.  

✅ Build an interactive **salary calculator** where users input salaries, and JavaScript filters the high earners.

---
