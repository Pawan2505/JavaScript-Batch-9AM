const person = {
  name: "Pawan",
  age: 25,
  Subjects: ["HTML", "CSS", "Javascript", "Reactjs"],
  // The 'greet' function is not needed for storage in localStorage
  greet: function () {
    console.log("hello");
  },
};

localStorage.setItem("user", JSON.stringify(person));
