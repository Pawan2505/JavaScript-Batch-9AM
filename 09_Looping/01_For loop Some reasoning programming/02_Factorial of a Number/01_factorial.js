let num = 10;
let factorial = 1;

// Multiply numbers from num to 1
for (let i = num; i >= 1; i--) {
    factorial *= i;
}

console.log(`${num}! is: ${factorial}`);
