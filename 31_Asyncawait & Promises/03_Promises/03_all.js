// Promise.all() : Sabhi promises complete ho tabhi output milega.

Promise.all([
    Promise.reject("Task 1"),
    Promise.reject("Task 2")])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error : ", error));
