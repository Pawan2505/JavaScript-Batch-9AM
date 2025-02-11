// Function to find factors of a given number
function findFactors() {
    let num = parseInt(document.getElementById("num").value); // Get the number from the user input
    let factorsArray = []; // Array to store the factors

    // Loop through all numbers and check divisibility
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorsArray.push(i); // Add factor to the array
        }
    }

    // Display the factors in the "result" <pre> element
    document.getElementById("result").innerText = factorsArray.length > 0 ? `Factors of ${num}: \n${factorsArray.join(', ')}` : "No factors found.";
}
