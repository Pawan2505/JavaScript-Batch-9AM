// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1){
        return false; // 0 and 1 are not prime numbers
    } 

    // Loop from 2 to square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible, not a prime
        }
    }

    return true; // If no factors found, it's a prime number
}

// Define range
let start = 1, end = 20;
let result = []; // Array to store prime numbers

// Loop through the range and check for prime numbers
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        result.push(i); // Add prime number to the array
    }
}

console.log(result);  // Print array of prime numbers
console.log(...result); // Print numbers in single line
