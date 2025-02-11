// Function to reverse a number
function reverseNumber() {
    let num = parseInt(document.getElementById("num").value); // Get input number
    let rev = 0; 

    // Loop to reverse the number
    while (num > 0) {
        let digit = num % 10; // Extract last digit
        rev = rev * 10 + digit; // Build reversed number
        num = Math.floor(num / 10); // Remove last digit
    }

    // Display the reversed number
    document.getElementById("result").innerText = `Reversed Number: ${rev}`;
}
