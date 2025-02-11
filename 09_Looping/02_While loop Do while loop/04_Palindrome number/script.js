function isPalindrome(num) {
    let temp = num;
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    return temp === rev;
}

function checkPalindrome() {
    let number = document.getElementById("number").value;

    if (number === "") {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    number = parseInt(number);

    if (isPalindrome(number)) {
        document.getElementById("result").innerText = `${number} is a Palindrome Number! ✅`;
    } else {
        document.getElementById("result").innerText = `${number} is NOT a Palindrome Number! ❌`;
    }
}
