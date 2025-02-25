// Console par ek basic message print kar rahe hain
console.log("Hello Bhai");



// add function call kar rahe hain (agar defined nahi hai to ReferenceError aayega)
add();

// x ka value print karna hai (agar x defined nahi hai to ReferenceError aayega)
console.log(x);

// num variable declare kiya hai, lekin value assign nahi ki
let num;

// num ke andar name property ko access kar rahe hain (undefined value par access karne se TypeError aayega)
console.log(num.name); // TypeError: Cannot read property 'name' of undefined

// Array banane ki koshish kar rahe hain jisme negative size diya gaya hai (RangeError)
let arr = new Array(-5); // RangeError: Invalid array length

// Samajh gaya tha ki ye code kaise kaam karta hai
console.log("Bhai samjh me aa gya");

// Try-catch block se error handle kar rahe hain
try {
  // x ko print karna chahte hain, lekin x defined nahi hai, ReferenceError aayega
  console.log(x);
} catch (error) {
  // ReferenceError ko catch kar rahe hain
  console.log("Error: " + error.message); // Error: x is not defined
}

// abhi bhi soch rahe hain ki ab kya karen
console.log("Soch raha hu abhi..");

// Try-catch block me TypeError ko handle karna
try {
  // TypeError, kyunki num undefined hai aur uske properties access kar rahe hain
  console.log(num.name);
} catch (error) {
  console.log("Error: " + error.message); // Error: Cannot read property 'name' of undefined
}

// Try-catch block me RangeError ko handle karna
try {
  // RangeError, kyunki negative array length pass kar rahe hain
  let arr = new Array(-5);
} catch (error) {
  console.log("Error: " + error.message); // Error: Invalid array length
}
