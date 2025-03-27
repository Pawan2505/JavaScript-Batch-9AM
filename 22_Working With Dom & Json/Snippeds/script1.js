const person1 = {
  name: "Pawan",
  age: 25,
  city: "Delhi",
  country: "India",
  hobbies: ["Reading", "Coding", "Travelling"],
};

console.log(person1)
const replacer = (key, value) => {
  if (key === "city" || key === "country") {
    return undefined; 
  }
  return value;
};

const jsonString = JSON.stringify(person1, replacer);

localStorage.setItem("d1",jsonString)

console.log(jsonString);
