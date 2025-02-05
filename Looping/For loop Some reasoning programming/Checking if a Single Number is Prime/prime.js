let num = 11;
let count = 0;

// Count number of divisors
for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
}

// A prime number has exactly 2 divisors (1 and itself)
console.log(count === 2 ? "Prime Number!" : "Not Prime Number!");
