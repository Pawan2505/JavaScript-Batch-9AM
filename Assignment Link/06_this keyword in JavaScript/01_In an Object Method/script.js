let person = {
  name: "Pawan",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello, Pawan
