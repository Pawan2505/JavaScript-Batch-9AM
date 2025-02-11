function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function checkAbundant() {
    let num = document.getElementById("numInput").value;

    if (num === "" || num <= 0) {
        document.getElementById("result").innerText = "Please enter a valid positive number!";
        return;
    }

    let sumValue = sumOfDivisors(parseInt(num));

    if (sumValue > num) {
        document.getElementById("result").innerText = `${num} is an Abundant Number! ✅`;
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = `${num} is NOT an Abundant Number! ❌`;
        document.getElementById("result").style.color = "red";
    }
}
