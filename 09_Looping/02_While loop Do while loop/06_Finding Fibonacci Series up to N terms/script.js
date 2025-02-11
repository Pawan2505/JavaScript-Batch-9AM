function generateFibonacci() {
    let terms = document.getElementById("terms").value;

    if (terms === "" || terms <= 0) {
        document.getElementById("result").innerText = "Please enter a valid positive number!";
        return;
    }

    terms = parseInt(terms);
    let n1 = 0, n2 = 1;
    let fibonacciSeries = [n1, n2];

    for (let i = 2; i < terms; i++) {
        let n3 = n1 + n2;
        fibonacciSeries.push(n3);
        n1 = n2;
        n2 = n3;
    }

    document.getElementById("result").innerText = `Fibonacci Series (${terms} terms): ${fibonacciSeries.join(', ')}`;
}
