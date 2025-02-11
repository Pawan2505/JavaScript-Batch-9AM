let num = 20;
let factorsArray = [];

// Loop through all numbers and check divisibility
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factorsArray.push(i); // Store factors in an array
    }
}

console.log(factorsArray);
