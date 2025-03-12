### **JavaScript Inheritance: Understanding Classes and Inheritance**

#### **What is Inheritance in JavaScript?**
- **Inheritance** allows one class (called the **subclass** or **child class**) to inherit the properties and methods of another class (called the **parent class** or **base class**).
- This helps to avoid code duplication by reusing common functionality from the parent class in child classes.

#### **Key Concepts:**

1. **Base Class (Parent Class)**: The class that contains common properties and methods that will be shared across other classes.
2. **Derived Class (Child Class)**: A class that extends the base class, inheriting its properties and methods.

---

### **Code Explanation**

```javascript
// Base class representing a Student
class Student {
  // Constructor to initialize Student's name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the student's name and age
  display() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
  }
}
```

- **`Student` Class**:
  - Contains a **constructor** that initializes two properties: `name` and `age`.
  - Includes a method `display()` that outputs the `name` and `age` of the student.

---

```javascript
// Derived class Dhauv which inherits from Student
class Dhauv extends Student {
  // Constructor to initialize name, age (inherited), and id (specific to Dhauv)
  constructor(name, age, id) {
    super(name, age); // Call the parent class (Student) constructor
    this.id = id; // Initialize the id property specific to Dhauv
  }

  // Method to display detailed information about the Dhauv instance
  details() {
    console.log(`My Id is ${this.id}, my name is ${this.name}, and my age is ${this.age}`);
  }
}
```

- **`Dhauv` Class (Child Class)**:
  - **Inheritance**: `Dhauv` **extends** `Student`, so it inherits the properties `name` and `age` from `Student`.
  - **`super()`**: The `super(name, age)` is used in the child class constructor to call the parent class (`Student`) constructor, so the `name` and `age` properties are initialized from the parent class.
  - The `Dhauv` class also has its own unique property `id` and a method `details()` that outputs the `id`, `name`, and `age`.

---

### **Creating Instances:**

```javascript
// Creating an instance of Student
const st = new Student("Sejal", 18);
st.display(); // Output: I am Sejal and my age is 18
```

- **Instance of `Student`**: When you create an instance of the `Student` class, you pass `name` and `age` to the constructor, which initializes the properties and calls the `display()` method to show the information.

---

```javascript
// Creating an instance of Dhauv
const dh = new Dhauv("Pawan", 25, 1);
dh.details(); // Output: My Id is 1, my name is Pawan, and my age is 25
```

- **Instance of `Dhauv`**: When creating an instance of `Dhauv`, you pass all three required parameters: `name`, `age`, and `id`.
- The `details()` method displays the information about the `Dhauv` instance, including the inherited `name` and `age` from `Student`.

---

### **Error Handling**

```javascript
// Error Example (uncomment to test):
// const dhError = new Dhauv(1); // Error: missing name and age arguments
```

- If you don’t provide all the required arguments (`name`, `age`, and `id`), the code will throw an error.
- **`super()`** requires the parent class constructor to be called with the appropriate parameters, so missing parameters in the `Dhauv` constructor would result in an error.

---

### **Key Concepts in Detail:**

1. **`class` Syntax**:
   - `class` is used to define a blueprint for creating objects.
   - **Constructor**: A special method used to initialize new objects.
   - **Methods**: Functions that are defined within a class to perform certain actions on the class’s data.

2. **Inheritance with `extends`**:
   - The `extends` keyword is used to create a subclass that inherits from a parent class.
   - The subclass (child class) automatically gets access to all the methods and properties of the parent class, but can also define its own unique methods and properties.

3. **`super()`**:
   - **`super()`** is used in the child class to call the constructor of the parent class. This allows the child class to inherit and initialize the properties of the parent class.

4. **Accessing Inherited Properties**:
   - The child class can access inherited properties and methods directly, as shown in the `Dhauv` class accessing `name` and `age` from the `Student` class.

---

### **Note:**
- Inheritance enables code reuse, allowing child classes to inherit behavior and properties from parent classes.
- The **`super()`** method is crucial for invoking the parent class constructor and setting up inherited properties.
- Child classes can define their own unique methods while still benefiting from inherited functionality.
  
---

