const person = {
  name: "Pawan",
  age: 25,
  city: "Delhi",
  country: "India",
  hobbies: ["Reading", "Coding", "Travelling"],
};

console.log(person)
const replacer = (key, value) => {
  if (key === "city" || key === "country") {
    return undefined; 
  }
  return value;
};

const jsonString = JSON.stringify(person,replacer);

console.log(jsonString);
