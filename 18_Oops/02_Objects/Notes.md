### **JavaScript OOP Concepts - Object & Constructor Function**

---

## **1. Object Literal**

An **object literal** is the simplest way to create an object in JavaScript. It is done by directly defining the object inside `{}`.

### Example:

```javascript
const user = {
  username: "Amit",
  loginCount: 15,
  signedIn: true,
  getUserDetails: function () {
    console.log(this); // Logs the current object with all properties
  },
};
```

- **`user`**: The object with properties (`username`, `loginCount`, `signedIn`) and a method (`getUserDetails`).
- **`this`**: Inside the method, `this` refers to the `user` object itself.

### Output:

```javascript
user.getUserDetails(); // Logs: { username: 'Amit', loginCount: 15, signedIn: true, getUserDetails: [Function] }
```

---

## **2. Constructor Function**

A **constructor function** helps to create multiple objects with the same structure.

### Example:

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome, ${this.username}!`);
  };
}
```

- **`this`**: Refers to the new object that is created when the constructor is called.
- **`new` keyword**: It is used to create a new instance of the `User` object.

### Creating Instances:

```javascript
const userOne = new User("Amit Sharma", 15, true);
const userTwo = new User("Rahul Singh", 9, false);
```

- **`userOne`** and **`userTwo`** are different objects created from the same constructor.

---

## **3. `this` Keyword**

The `this` keyword refers to the current object.

- Inside an **object method**, `this` refers to the object.
- Inside a **constructor function**, `this` refers to the new object being created.

### Example:

```javascript
function User(username) {
  this.username = username;
  this.greeting = function () {
    console.log(`Hello, ${this.username}!`);
  };
}

const user = new User("Amit");
user.greeting(); // Logs: Hello, Amit!
```

---

## **4. Constructor Property**

Every object has a **`constructor`** property that refers to the function that created the object.

### Example:

```javascript
console.log(userOne.constructor); // Logs: [Function: User]
```

---

## **5. Object Creation**

- **Object Literal**: Use when you want to create a single object.
- **Constructor Function**: Use when you need multiple objects with the same structure.

---

## **Note:**

- **Object Literal**: `{}` syntax for defining a single object.
- **Constructor Function**: A function used to create multiple objects using the `new` keyword.
- **`this`**: Refers to the current object in methods or constructors.
- **`constructor` Property**: Refers to the function that created an object.
