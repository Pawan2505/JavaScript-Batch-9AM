function calculateFactorial() {
    let num = parseInt(document.getElementById("numberInput").value);
    let factorial = 1;

    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerHTML = "❌ Please enter a valid positive number!";
        return;
    }

    for (let i = num; i >= 1; i--) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML = `✅ ${num}! is: ${factorial}`;
}
