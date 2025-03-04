### **Lecture Notes: Inheritance in JavaScript**

In JavaScript, **Inheritance** allows a class to inherit properties and methods from another class. This is helpful for creating a base class with common functionality, and then extending it to create specialized classes with additional functionality.

Let’s go through a example where we have a **Vehicle** class, and we create specialized classes like **Car** and **Bike** that inherit from **Vehicle**.

---

### **Example: Vehicle Inheritance**

We will define a **Vehicle** class with basic properties such as `make` and `model`, and then we will extend this class into **Car** and **Bike** classes with additional properties and behaviors.

```javascript
// Base class: Vehicle
class Vehicle {
    constructor(make, model) {
        this.make = make;  // Store the make of the vehicle
        this.model = model;  // Store the model of the vehicle
    }

    // Method to display vehicle details
    displayInfo() {
        console.log(`Vehicle Make: ${this.make}, Model: ${this.model}`);
    }
}

// Derived class: Car that inherits from Vehicle
class Car extends Vehicle {
    constructor(make, model, numberOfDoors) {
        super(make, model);  // Call the parent class constructor to set the make and model
        this.numberOfDoors = numberOfDoors;  // Additional property for Car class
    }

    // Method to display car-specific info
    displayCarInfo() {
        console.log(`${this.make} ${this.model} is a car with ${this.numberOfDoors} doors.`);
    }
}

// Derived class: Bike that inherits from Vehicle
class Bike extends Vehicle {
    constructor(make, model, hasSidecar) {
        super(make, model);  // Call the parent class constructor to set the make and model
        this.hasSidecar = hasSidecar;  // Additional property for Bike class
    }

    // Method to display bike-specific info
    displayBikeInfo() {
        if (this.hasSidecar) {
            console.log(`${this.make} ${this.model} is a bike with a sidecar.`);
        } else {
            console.log(`${this.make} ${this.model} is a bike without a sidecar.`);
        }
    }
}

// Creating an instance of Car
const myCar = new Car("Maruti", "Swift", 4);
myCar.displayInfo();  // Output: Vehicle Make: Maruti, Model: Swift
myCar.displayCarInfo();  // Output: Maruti Swift is a car with 4 doors.

// Creating an instance of Bike
const myBike = new Bike("Royal Enfield", "Bullet", true);
myBike.displayInfo();  // Output: Vehicle Make: Royal Enfield, Model: Bullet
myBike.displayBikeInfo();  // Output: Royal Enfield Bullet is a bike with a sidecar.
```

---

### **Explanation of the Example**

1. **Vehicle Class**:
   - The `Vehicle` class is the base class that holds the common properties `make` and `model` for any vehicle. It also has a method `displayInfo()` to display basic vehicle details.

2. **Car Class**:
   - The `Car` class extends the `Vehicle` class, which means it inherits all the properties and methods of `Vehicle`. 
   - Additionally, the `Car` class has a property `numberOfDoors`, which is specific to cars.
   - The `displayCarInfo()` method is used to show car-specific details.

3. **Bike Class**:
   - Similar to the `Car` class, the `Bike` class extends the `Vehicle` class.
   - It has a property `hasSidecar`, which tells whether the bike has a sidecar or not.
   - The `displayBikeInfo()` method displays bike-specific details based on whether the bike has a sidecar.

4. **Creating Instances**:
   - We create an instance of `Car` (`myCar`) and `Bike` (`myBike`) to show how each of the specialized classes works.
   - Both `myCar` and `myBike` inherit the `displayInfo()` method from the `Vehicle` class, but also have their own methods for displaying specific information about cars and bikes.

---

### **Key Points about Inheritance in JavaScript**:

1. **Inheritance** allows you to create a new class (child class) based on an existing class (parent class).
2. **super()** is used to call the constructor of the parent class in the child class. It helps initialize properties from the parent class.
3. A **child class** can override or add new properties and methods that are not in the parent class.
4. An object of a child class can access both the methods of the parent class and the methods defined in the child class.
5. **`instanceof`** can be used to check if an object is an instance of a certain class or its subclass.

---

### **Note:**

In this Notes, we explored the concept of **Inheritance** in JavaScript with a example of vehicles like **Car** and **Bike**. Using inheritance, we were able to extend the `Vehicle` class to create specific types of vehicles (car and bike) with their own unique properties and methods while inheriting common features like `make` and `model`. This is a powerful feature that helps in organizing code and reducing redundancy.