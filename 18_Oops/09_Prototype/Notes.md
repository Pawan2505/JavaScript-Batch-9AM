# JavaScript Prototypes

## What is a Prototype?

In JavaScript, a **prototype** is an object that is automatically linked to every function and object. Think of it as a **blueprint** from which objects can inherit properties and methods.

### Key Points:

- **Prototype** is an object used by JavaScript to implement **inheritance**.
- Objects **inherit** properties and methods from their prototype.

---

## 1. **How Prototypes Work?**

In simple terms, when you create an object in JavaScript, it can look up to its **prototype** if it doesn't find a property or method in the object itself. This is how objects share methods and properties in JavaScript.

### Example: Inheritance

Imagine you are creating a `Teacher` object in a school application:

```javascript
const teacher = {
  name: "Mr. Sharma",
  subject: "Math",
  introduce: function () {
    console.log("Hello, I am " + this.name + " and I teach " + this.subject);
  },
};

const newTeacher = Object.create(teacher);
newTeacher.name = "Mrs. Gupta";
newTeacher.subject = "Science";
newTeacher.introduce(); // Output: Hello, I am Mrs. Gupta and I teach Science
```

### What's Happening?

- `newTeacher` is inheriting the `introduce` method from the `teacher` object.
- Even though `introduce` is not directly in `newTeacher`, it can still call it because it’s inherited from the `teacher` object via the prototype.

---

## 2. **Constructor Functions and Prototypes**

In JavaScript, **constructor functions** are used to create objects. Each function has a **prototype** property that contains methods shared by all instances (objects) created from that constructor.

### Example: Teacher Constructor

```javascript
function Teacher(name, subject) {
  this.name = name;
  this.subject = subject;
}

Teacher.prototype.introduce = function () {
  console.log("Hello, I am " + this.name + " and I teach " + this.subject);
};

const teacher1 = new Teacher("Mr. Kapoor", "Physics");
const teacher2 = new Teacher("Ms. Iyer", "Chemistry");

teacher1.introduce(); // Output: Hello, I am Mr. Kapoor and I teach Physics
teacher2.introduce(); // Output: Hello, I am Ms. Iyer and I teach Chemistry
```

### Explanation:

- `Teacher` is a **constructor function** used to create objects.
- `introduce` is added to the `Teacher.prototype`.
- Both `teacher1` and `teacher2` inherit the `introduce` method.

---

## 3. **Prototype Chain**

JavaScript uses the **prototype chain** to allow objects to inherit properties and methods from other objects. It’s like a chain of inheritance, where objects can look at their **parent objects** for missing properties.

### Example: Prototype Chain with Animals

In a school zoo, we have animals like dogs and cats inheriting common behavior from a general `Animal` object.

```javascript
const animal = {
  canEat: true,
};

const dog = Object.create(animal); // dog inherits from animal
dog.barks = true;

const cat = Object.create(animal); // cat also inherits from animal
cat.meows = true;

console.log(dog.canEat); // Output: true (from animal)
console.log(cat.canEat); // Output: true (from animal)
console.log(dog.barks); // Output: true (from dog)
console.log(cat.meows); // Output: true (from cat)
```

### What's Happening?

- `dog` and `cat` both inherit the `canEat` property from the `animal` prototype.
- They also have their own unique properties like `barks` and `meows`.

---

## 4. **Why Prototypes are Useful**

In India, think of prototypes like sharing resources in a community. Instead of each student having their own version of a subject (like a textbook), they **share** the knowledge or methods from a central source (the prototype), making things **efficient**.

### Benefits:

- **Memory Efficiency**: Prototypes allow all objects to **share** the same methods, saving memory.
- **Inheritance**: Prototypes let objects **inherit** properties from other objects, making code more **reusable**.

---

## 5. **Common Mistakes with Prototypes**

1. **Modifying Built-in Prototypes**: Avoid modifying the prototype of built-in JavaScript objects like `Array` or `Object`. It can lead to bugs in your code or unexpected results.

   For example, extending `Array.prototype` like this:

   ```javascript
   Array.prototype.first = function () {
     return this[0];
   };
   ```

   While it works, it’s not recommended because it changes the behavior of the **global `Array`** object, which might interfere with other code.

2. **Prototype Pollution**: Changing or extending prototypes in unsafe ways can cause problems and bugs in your application.

---

## 6. **Note:**

- **Prototypes** are objects that allow inheritance in JavaScript.
- When you create an object, it can inherit methods from another object through the **prototype chain**.
- Prototypes help save memory by allowing objects to **share methods** rather than creating their own copies of the same method.
- Using **constructor functions**, we can define shared behavior and create reusable objects.

---
