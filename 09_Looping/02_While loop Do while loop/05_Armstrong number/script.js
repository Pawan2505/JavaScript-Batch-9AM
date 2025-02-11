function isArmstrong(num) {
    let temp = num;
    let numLength = num.toString().length;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, numLength);
        num = Math.floor(num / 10);
    }

    return temp === sum;
}

function checkArmstrong() {
    let number = document.getElementById("number").value;

    if (number === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    number = parseInt(number);

    if (isArmstrong(number)) {
        document.getElementById("result").innerText = `${number} is an Armstrong Number! ✅`;
    } else {
        document.getElementById("result").innerText = `${number} is NOT an Armstrong Number! ❌`;
    }
}
