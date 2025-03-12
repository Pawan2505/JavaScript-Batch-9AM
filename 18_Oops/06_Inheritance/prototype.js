function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello from " + this.name);
};

const dog = new Animal("Dog");
dog.sayHello(); // Hello from Dog
