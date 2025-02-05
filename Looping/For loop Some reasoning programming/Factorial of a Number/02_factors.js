let num = 20;
let factors = "";

// Loop through all numbers and check divisibility
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors += `${i} `;
    }
}

console.log(factors); // Print factors as a string
