// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
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

// Function to find prime numbers in a given range
function findPrimeNumbers() {
    const start = parseInt(document.getElementById("start").value); // Get start range from user input
    const end = parseInt(document.getElementById("end").value); // Get end range from user input
    let result = []; // Array to store prime numbers

    // Loop through the range and check for prime numbers
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            result.push(i); // Add prime number to the array
        }
    }

    // Display the result in the "result" <pre> element
    document.getElementById("result").innerText = result.length > 0 ? `Prime Numbers: \n${result.join(', ')}` : "No prime numbers found in the given range.";
}
