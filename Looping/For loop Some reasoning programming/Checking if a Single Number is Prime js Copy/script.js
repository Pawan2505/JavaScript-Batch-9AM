function checkPrime() {
    let num = parseInt(document.getElementById("numberInput").value);
    let count = 0;

    if (isNaN(num) || num < 1) {
        document.getElementById("result").innerHTML = "❌ Please enter a valid positive number!";
        return;
    }

    // Count number of divisors
    for (let i = 1; i <= num; i++) {
        if (num % i === 0){
            count++;
        } 
    }

    // Display result
    if (count === 2) {
        document.getElementById("result").innerHTML = `✅ ${num} is a Prime Number!`;
    } else {
        document.getElementById("result").innerHTML = `❌ ${num} is NOT a Prime Number!`;
    }
    
}
