// Promise.all() : Sabhi promises complete ho tabhi output milega.

Promise.all([
    Promise.resolve("Task 1"),
    Promise.resolve("Task 2")])
    .then((results) => console.log(results));
