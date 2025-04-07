// function greet(name, sayHello) {
//     console.log("Hi", name);
//     sayHello();
// }

// function sayHello() {
//     console.log("How are you!");
// }

// greet("Pawan", sayHello);


// console.log("Start...");

// setTimeout(() => {
//     console.log("I am inside callback");
// }, 1000);

// console.log("End");


function employee(name,salary) {
    console.log("Congrts",name);
    salary();
}

function salary() {
    console.log("Your Salary Credited!")
}

employee("Nancy", salary);