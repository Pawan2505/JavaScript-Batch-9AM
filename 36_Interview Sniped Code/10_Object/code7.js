let student = {
  name: "Amit",
  age: 21,
  course: "BCA",
  isActive: true,
};

for (let key in student) {
  console.log(key + ":", student[key]);
}
