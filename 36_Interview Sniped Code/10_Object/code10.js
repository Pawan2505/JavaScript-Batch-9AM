let student = {
  name: "Amit",
  age: 21,
  course: "BCA",
  isActive: true,
};

let jsonData = JSON.stringify(student);
console.log(jsonData);

console.log(typeof jsonData);

let parsedObj = JSON.parse(jsonData);
console.log(parsedObj);
