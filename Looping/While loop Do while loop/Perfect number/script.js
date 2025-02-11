function power(num, exp) {
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result *= num;
    }
    return result;
}

function calculatePower() {
    let base = document.getElementById("base").value;
    let exponent = document.getElementById("exponent").value;
    
    if (base === "" || exponent === "") {
        document.getElementById("result").innerText = "Please enter both values!";
        return;
    }

    base = parseFloat(base);
    exponent = parseInt(exponent);

    let ans = power(base, exponent);
    
    document.getElementById("result").innerText = `Result: ${base}^${exponent} = ${ans}`;
}
