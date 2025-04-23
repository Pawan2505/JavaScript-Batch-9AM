let original = { user: "Pawan", details: { age: 25 } };
let deepClone = JSON.parse(JSON.stringify(original));

deepClone.details.age = 30;
console.log(original.details.age); // Output: 25

console.log(original)
console.log(deepClone)

