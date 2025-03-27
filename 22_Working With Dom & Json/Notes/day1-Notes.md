### LocalStorage in JavaScript

**JavaScript objects** and **LocalStorage** that will help you become more comfortable with handling data in the browser. 

---

### **1. What is an Object in JavaScript?**

An **object** in JavaScript is like a collection of key-value pairs. Think of it like a real-world object, like a person, where each property (like name, age, and salary) is stored as a key-value pair.

Here’s how you define an object:

```javascript
let person = {
  name: "Priyanshi",  // Key: 'name' | Value: "Priyanshi"
  age: 16,            // Key: 'age' | Value: 16
  salary: 0,          // Key: 'salary' | Value: 0
};
```

- **Accessing properties**: You can access values in an object using **dot notation** or **bracket notation**.

```javascript
console.log(person.name);   // Dot notation
console.log(person['age']); // Bracket notation
```

---

### **2. What is LocalStorage?**

LocalStorage is a built-in browser feature that allows you to store data in the user's browser. It's useful for saving data that should persist across page refreshes or even when the browser is closed. 

- **Important Note**: LocalStorage only stores **strings**. So, if you want to store something like an object, you need to convert it into a string format.

### **Storing an Object in LocalStorage**

Let’s store our **`person`** object in LocalStorage:

```javascript
localStorage.setItem("user", JSON.stringify(person));
```

- **`JSON.stringify()`** turns our object into a string because LocalStorage can only store strings.
- **`setItem()`** is the method that stores the data, with the first argument being the key ("user") and the second being the value (the stringified object).

---

### **3. Retrieving Data from LocalStorage**

When you retrieve the data, it will come back as a string, so you need to **convert it back** into a JavaScript object using **`JSON.parse()`**:

```javascript
let obj = JSON.parse(localStorage.getItem("user"));
console.log(obj); // Now 'obj' is an object again, not a string
```

- **`getItem()`** gets the data you stored.
- **`JSON.parse()`** converts the string back to an object.

### **Checking the Type of Data**

You can check the type of any variable in JavaScript using the **`typeof`** operator. For instance:

```javascript
console.log(typeof obj); // Should print 'object' since 'obj' is an object now
```

---

### **4. Storing Different Data Types in LocalStorage**

LocalStorage can store different types of data, but it always stores them as **strings**. Here’s how you can store various types of data:

#### **Storing a String**

```javascript
let firstPrise = "Sejal";
localStorage.setItem("p1", firstPrise);
```

#### **Storing a Number**

```javascript
let num = 999;
localStorage.setItem("Number", num);  // This stores the number as a string
```

When you retrieve the number, it will come back as a string, so you may need to convert it back to a number:

```javascript
const n1 = localStorage.getItem("Number");
console.log(n1); // "999" (string)
console.log(Number(n1)); // Converts it to a number
```

#### **Storing a Boolean**

```javascript
let bool = false;
localStorage.setItem("boolean", bool);  // Boolean gets stored as a string ("false")
```

---

### **5. Modifying and Clearing Data in LocalStorage**

You can modify the data in LocalStorage by updating the object and storing it again. Let’s say we update the **`person2`** object and then store it:

```javascript
let person2 = {
  name: "Vishwa",
  age: 20,
};

// Update the object
person2.salary = 99; 
localStorage.setItem("p2", JSON.stringify(person2)); // Save the updated version
```

If you want to **delete everything** stored in LocalStorage, use:

```javascript
localStorage.clear(); // This wipes out everything stored in LocalStorage
```

---

### **6. Objects with Methods**

In JavaScript, you can store **functions** inside objects. These functions are called **methods**. Let’s add a `greet` method to our `object`:

```javascript
let object = {
  name: "Pawan Maurya",
  age: 25,
  salary: 10,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
```

- The **`greet()`** method is a function that can access the properties of the object using **`this`**.

You can then store this object with the method in LocalStorage the same way:

```javascript
localStorage.setItem("Person1", JSON.stringify(object));
```

---

### **7. Working with Nested Objects**

Objects can also contain other objects inside them. These are called **nested objects**. Let’s see how you can work with them:

```javascript
let person2 = {
  name: "Vishwa",
  age: 20,
  car: {
    car1: "BMW",
    car2: "Porsche",
  },
};
```

To access properties of a nested object, you can use dot notation or bracket notation:

```javascript
console.log(person2.car.car2);  // Accessing nested car2
console.log(person2["name"]);   // Accessing name using bracket notation
```

### **Storing Nested Objects in LocalStorage**

Just like regular objects, nested objects can also be stored in LocalStorage after converting them to a string:

```javascript
localStorage.setItem("pp", JSON.stringify(person2));
```

---

