// Function to find the sum of proper divisors of a number
function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) { // Proper divisors (excluding the number itself)
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// Function to check if two numbers form a Friendly Pair
function friendlyPair(num1, num2) {
    let sum1 = sumOfDivisors(num1);
    let sum2 = sumOfDivisors(num2);

    return (sum1 / num1) === (sum2 / num2);
}

// Function to check Friendly Pair from user input
function checkFriendlyPair() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "" || num1 <= 0 || num2 <= 0) {
        document.getElementById("result").innerText = "Please enter valid positive numbers!";
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (friendlyPair(num1, num2)) {
        document.getElementById("result").innerText = `${num1} & ${num2} are a Friendly Pair! ✅`;
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = `${num1} & ${num2} are NOT a Friendly Pair ❌`;
        document.getElementById("result").style.color = "red";
    }
}
