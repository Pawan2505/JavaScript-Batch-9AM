// Function to calculate the sum of digits of a given number
function calculateSum() {
    let num = parseInt(document.getElementById("num").value); // Get the number from the user input
    let sum = 0;

    // Loop to calculate the sum of digits
    while (num > 0) {
        let digits = num % 10;   // Get the last digit
        sum += digits;           // Add digit to the sum
        num = Math.floor(num / 10); // Remove the last digit from the number
    }

    // Display the sum of digits in the "result" <pre> element
    document.getElementById("result").innerText = `Sum of digits: ${sum}`;
}
