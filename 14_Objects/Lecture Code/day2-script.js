// // Students ka data ek array mein store kiya gaya hai
// let student = [
//   { name: "vishwa", salary: 0 },
//   { name: "vatsal" },
//   { name: "poojan", salary: 1 },
//   { name: "jaimin", salary: 10000 },
//   { name: "mastur", salary: -17 },
// ];

// // 'forEach' ka use karke student ki information ko console mein dikhana
// student.forEach((item) => console.log(item));

// // Student ki 3rd entry ki salary ko console mein dikhana
// console.log(student[3].salary);

// // 'for...of' loop ka use karke har student ko console mein dikhana
// for (let item of student) {
//   console.log(item);
// }

// // 'for...in' loop ka use karke student ke index ko console mein dikhana
// for (let index in student) {
//   console.log(student[index]);
// }

// // 'map' ka use karke sirf salary ki list banana
// const names = student.map((s) => s.salary);
// console.log(names);

// // Student ki 'keys()' method ka use karke student ke sabhi properties ki list
// console.log(Object.keys(student));

// // Ek object define karna
// const person = {
//   name: "Pawan", // Property: name
//   age: 24, // Property: age
//   id: 11, // Property: id
// };

// // 'Object' ke alag-alag methods ka use karna
// console.log(Object.keys(person)); // Properties ki list
// console.log(Object.values(person)); // Values ki list
// console.log(Object.entries(person)); // Properties aur values ki list

// // 'Object.create()' ka use karke ek naya object banana
// console.log(Object.create(person));

// // Ek naya object banana aur usse pehle wale object se link karna
// let arr = Object.create(person);
// arr.name = "Pawan";
// arr.sn = 123;

// console.log(person); // Original object ko dikhana
// console.log(arr); // Naya object ko dikhana

// // 'Object.fromEntries()' ka use karke object ko dobara banana
// let attrib = Object.fromEntries(Object.entries(person));
// console.log(attrib);

// // Students ka ek array
// const students = [
//   { name: "Amit", age: 20 },
//   { name: "unal", age: 22 },
//   { name: "Sara", age: 22 },
//   { name: "unal", age: 21 },
// ];

// // Ek student ko find karna
// let value = students.find((s) => s.name == "Kunal");
// console.log(value); // 'Kunal' naam ka student nahi milega

// // 'filter' ka use karke 'unal' naam ke students ko find karna
// let values = students.filter((s) => s.name == "unal");
// console.log(values); // 'unal' naam ke students ki list

// // Ek array se ek object banana
// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
//   ["id", 123],
// ];

// // 'Object.fromEntries()' ka use karke ek object banana
// const myObj = Object.fromEntries(fruits);
// console.log(myObj); // Object ko console mein dikhana

// // Target object ko define karna
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Source object ko define karna
// const person2 = { firstName: "Anne", lastName: "Smith" };

// // 'Object.assign()' ka use karke source object ko target object mein merge karna
// Object.assign(person1, person2);
// console.log(person1); // Updated target object
// console.log(person2); // Source object

// // Fruits ka array
// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// // Ek custom callback function jo quantity ke basis par "ok" ya "low" return karta hai
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // 'Object.groupBy' ka use karke 'ok' aur 'low' mein fruits ko group karna
// const result = Object.groupBy(fruits, myCallback);

// // Result ko console mein dikhana
// let text = "Ye fruits Ok hain: <br>";

// for (let [x, y] of result.ok.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }
// console.log(text);

// // 'low' group ke fruits ko dikhana
// text += "<br>Ye fruits low hain: <br>";
// for (let [x, y] of result.low.entries()) {
//   text += y.name + " " + y.quantity + "<br>";
// }
// console.log(text);
