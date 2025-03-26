const person = {
    "name": "Pawan",
    "age": 25,
    "Subjects": ["HTML","CSS","Javascript","Reactjs"]
}

// console.log(person)

localStorage.setItem("user", JSON.stringify(person));

console.log(JSON.parse(localStorage.getItem("user")));


// localStorage.removeItem("user");


