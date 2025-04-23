class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Calls speak() of Animal
    console.log("Dog barks");
  }
}

let dog = new Dog();
dog.speak();
// Output:
// Animal speaks
// Dog barks
