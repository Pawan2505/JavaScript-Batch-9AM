let person = {
  name: "Pawan",
};

function greet(age, city) {
  console.log(
    `Hello, I am ${this.name}. I am ${age} years old and live in ${city}.`
  );
}

greet.apply(person, [25, "India"]);
// Output: Hello, I am Pawan. I am 25 years old and live in India.
   


// Note: The apply() method is similar to call(), but the difference is that arguments are passed as an array (or array-like object) instead of individual values.
