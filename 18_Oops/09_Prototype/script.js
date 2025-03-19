function Person(name, age) {
  this.name = name;
  this.age = age;
}


const person1 = new Person("Alice", 25);

const person2 = new Person("Pawan", 24);

Person.prototype.greet = function (salary) {
    this.salary = salary;

    delete this.age;
    console.log(`Name : ${this.name} age: ${this.age} Salary : ${this.salary}`)
}

person2.greet(999);
