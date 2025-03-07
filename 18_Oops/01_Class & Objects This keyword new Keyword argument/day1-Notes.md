### **1. Defining a JavaScript Class**

In JavaScript, we define a **class** using the `class` keyword. A **class** is a blueprint or template for creating objects with shared properties and methods.

- A **class** defines the structure for creating multiple objects that will share the same set of properties and methods.
- The **class** itself is a constructor function behind the scenes, which is invoked when you create an instance (an object).

#### **Example:**

```javascript
class Student {
  // Class definition begins here
}
```

---

### **2. Constructor Method**

The **`constructor`** is a special method in a class. It is called **automatically** when a new object (instance) is created from the class. The constructor is used to **initialize** the object's properties with the values passed to it during object creation.

- **Purpose**: To set up initial values for the object's properties when an object is instantiated.
- **Syntax**: The constructor uses the `constructor` keyword.

#### **Example:**

```javascript
constructor(id, name) {
  this.id = id; // Setting the id property of the object
  this.name = name; // Setting the name property of the object
  console.log("Constructor called..."); // This message is logged when the constructor is invoked
}
```

- `this` refers to the **current instance** of the object.
- The **constructor** initializes the object’s properties with the values passed as arguments (in this case, `id` and `name`).

---

### **3. Method Definition**

Methods inside a class are functions that define the **behavior** of the objects created from that class. These methods can access the properties of the object using **`this`**.

- In this case, the **`display()`** method is used to **output** the `id` and `name` properties of the student object.

#### **Example:**

```javascript
display() {
  console.log(`Id : ${this.id} and Name : ${this.name}`); // Outputs the id and name of the student
}
```

- The `display()` method is **called on the object** created from the `Student` class and **accesses its properties** using `this`.

---

### **4. Creating an Object from the Class**

To create an **instance** of the class, you use the `new` keyword followed by the class name. The **constructor** is automatically called, and the object is created with the provided arguments.

- **Syntax**: `const obj = new ClassName(arguments);`
  
  - The `new` keyword creates a new instance of the class.
  - The constructor is called with the provided arguments (`1` and `"Pawan"` in this case).

#### **Example:**

```javascript
const obj = new Student(1, "Pawan"); // Creates a new Student object
```

- When `new Student(1, "Pawan")` is called:
  - The **constructor** is invoked with `id = 1` and `name = "Pawan"`.
  - The message `"Constructor called..."` is printed.

---

### **5. Calling a Method on the Object**

Once an object is created, you can **call its methods** using **dot notation**. The method can access the object's properties through `this`.

- **Syntax**: `obj.methodName();`

#### **Example:**

```javascript
obj.display(); // Calls the display method on the 'obj' instance
```

- The `display()` method will output:
  - `Id : 1 and Name : Pawan` because those are the values assigned to the `id` and `name` properties of `obj`.

---

### **Complete Example Explained**

```javascript
class Student {
  constructor(id, name) {
    this.id = id; // Initialize 'id' property
    this.name = name; // Initialize 'name' property
    console.log("Constructor called..."); // Logs when the constructor is called
  }

  display() {
    console.log(`Id : ${this.id} and Name : ${this.name}`); // Outputs the student's id and name
  }
}

// Create an instance of the Student class
const obj = new Student(1, "Pawan");  // Constructor is called, output: "Constructor called..."

// Call the display method on the obj object
obj.display();  // Output: "Id : 1 and Name : Pawan"
```

#### **Step-by-Step Process:**
1. **Class Definition**: The `Student` class defines the structure for creating student objects with `id` and `name` properties, and a `display()` method.
2. **Constructor Method**: The constructor is called when an object is created. It initializes the `id` and `name` properties based on the provided arguments.
3. **Creating an Object**: Using the `new` keyword, an object `obj` is created with `id = 1` and `name = "Pawan"`. The constructor is executed and prints `"Constructor called..."`.
4. **Calling the Method**: The `display()` method is called on the `obj` object, which outputs the student’s `id` and `name`.

---

### **Note:**

1. **Classes**: A class is a template for creating objects with shared properties and methods.
2. **Constructor**: The `constructor` method is called automatically when an object is created. It is used to initialize the object's properties.
3. **Methods**: Methods inside a class define the behavior of the objects created from the class. Methods can access the object's properties using `this`.
4. **Creating Objects**: Objects are created using the `new` keyword, which calls the constructor and initializes the object with the provided values.

---
