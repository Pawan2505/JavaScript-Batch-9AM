// Parent object
let animal = {
  eats: true,
  walk: function () {
    console.log("Animal walks");
  },
};

// Child object
let dog = Object.create(animal); // dog inherits from animal
dog.barks = true;

console.log(dog.eats); // Output: true (inherited from animal)
dog.walk(); // Output: Animal walks (inherited method)
console.log(dog.barks); // Output: true (own property)
console.log(dog)



// prototype chain : dog ---> animal ---> Object.prototype ---> null


// dog
//   ⬑ (inherits from)
// animal
//   ⬑ (inherits from)
// Object.prototype
//   ⬑
// null (end of chain)

