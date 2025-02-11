// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Function to check if a number is Strong Number
function isStrongNumber(num) {
    let temp = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sum === temp;
}

// Function to get input and check the result
function checkStrongNumber() {
    let number = document.getElementById("number").value;

    if (number === "" || number < 0) {
        document.getElementById("result").innerText = "Please enter a valid positive number!";
        return;
    }

    number = parseInt(number);

    if (isStrongNumber(number)) {
        document.getElementById("result").innerText = `${number} is a Strong Number! ✅`;
    } else {
        document.getElementById("result").innerText = `${number} is NOT a Strong Number! ❌`;
    }
}
