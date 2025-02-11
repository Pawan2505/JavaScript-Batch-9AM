### **Friendly Pair in JavaScript**  
✔️ Two numbers **(num1, num2)** are **Friendly Pairs** if:  
\[
\frac{\text{Sum of Divisors of } num1}{num1} = \frac{\text{Sum of Divisors of } num2}{num2}
\]

---

### ✅ **JavaScript Code:**
```js
// Function to calculate the sum of divisors of a number
function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum + num; // Including the number itself
}

// Function to check if two numbers are Friendly Pairs
function isFriendlyPair(num1, num2) {
    let sum1 = sumOfDivisors(num1);
    let sum2 = sumOfDivisors(num2);

    return (sum1 / num1) === (sum2 / num2);
}

// Example usage:
let num1 = 6;
let num2 = 28;

if (isFriendlyPair(num1, num2)) {
    console.log(`${num1} and ${num2} are Friendly Pairs! ✅`);
} else {
    console.log(`${num1} and ${num2} are NOT Friendly Pairs! ❌`);
}
```

---

### **🔹 Explanation:**
1. **Find the sum of divisors** of `num1` and `num2`.
2. **Check if their sum-to-number ratio is the same**.
3. If equal, **they are Friendly Pairs**.

---

### **🔹 Example Output**
✅ **Input:** `num1 = 6, num2 = 28`  
✅ **Output:**  
```
6 and 28 are Friendly Pairs! ✅
```
