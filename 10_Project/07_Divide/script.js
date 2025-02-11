document.getElementById('divideButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers';
        return;
    }

    if (num2 === 0) {
        document.getElementById('result').innerText = 'Cannot divide by zero';
        return;
    }

    const result = num1 / num2;
    document.getElementById('result').innerText = `Result: ${result}`;
});