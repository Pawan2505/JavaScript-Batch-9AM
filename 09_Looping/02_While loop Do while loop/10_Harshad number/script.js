function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function checkHarshad() {
    let num = document.getElementById("numInput").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let digitSum = sumDigit(parseInt(num));

    if (num % digitSum === 0) {
        document.getElementById("result").innerText = `${num} is a Harshad Number! ✅`;
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = `${num} is NOT a Harshad Number! ❌`;
        document.getElementById("result").style.color = "red";
    }
}
