let person = {
  name: "Pawan",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};


let greetFunc = person.greet;
greetFunc(); // Output: Hello, undefined (because `this` is lost)

let boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, Pawan

// Note :
//1. Jab hum person.greet ko alag function ki tarah call karte hain, to this ka reference lost ho jata hai.

//2. bind() -> function ko fix karta hai ki this kis object ko point kare.




