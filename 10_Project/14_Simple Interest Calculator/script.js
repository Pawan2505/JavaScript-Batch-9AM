function calculateInterest() {
    // Get the value of the 'principal' input field and convert it to a floating-point number
    const principal = parseFloat(document.getElementById('principal').value);
    // Get the value of the 'rate' input field and convert it to a floating-point number
    const rate = parseFloat(document.getElementById('rate').value);
    // Get the value of the 'time' input field and convert it to a floating-point number
    const time = parseFloat(document.getElementById('time').value);
    // Declare a variable to store the calculated interest
    let interest;

    // Check if any of the inputs are not valid numbers or if they are less than or equal to zero
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        // If the input is invalid, set the interest to an error message
        interest = 'Invalid input. Please enter positive numbers.';
    } else {
        // Calculate the interest using the formula: (principal * rate * time) / 100
        interest = (principal * rate * time) / 100;
    }

    // Display the calculated interest or error message in the element with ID 'result'
    document.getElementById('result').innerText = `Interest: ${interest.toFixed(2)}`;
}