## Divide Calculator Project

### HTML Structure
- **File:** `index.html`
- **Description:** This file contains the HTML markup for the divide calculator. It includes input fields for two numbers, a button to trigger the divide operation, and a div to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Divide Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number">
        <button id="divideButton">Divide</button>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling
- **File:** `style.css`
- **Description:** This file contains the CSS styles for the divide calculator. It styles the body, calculator container, input fields, button, and result display.

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.calculator {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  width: 85%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 10px;
  padding: 10px;
  background-color: #e9ecef;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px auto;
  width: 80%;
  padding: 10px;
}
```

### JavaScript Functionality
- **File:** `script.js`
- **Description:** This file contains the JavaScript code for the divide calculator. It adds an event listener to the divide button, retrieves the input values, performs the division, and displays the result. It also includes validation to ensure valid numbers and handle division by zero.

```javascript
document.getElementById('divideButton').addEventListener('click', function() {
    // Adds an event listener to the button with the ID 'divideButton'.
    // When the button is clicked, the anonymous function provided as the second argument is executed.
    
    const num1 = parseFloat(document.getElementById('num1').value);
    // Retrieves the value from the input field with the ID 'num1', converts it to a floating-point number,
    // and stores it in the variable 'num1'.
    
    const num2 = parseFloat(document.getElementById('num2').value);
    // Retrieves the value from the input field with the ID 'num2', converts it to a floating-point number,
    // and stores it in the variable 'num2'.
    
    if (isNaN(num1) || isNaN(num2)) {
        // Checks if either 'num1' or 'num2' is not a number using the 'isNaN' function.
        
        document.getElementById('result').innerText = 'Please enter valid numbers';
        // If the previous condition is true, sets the inner text of the element with the ID 'result'
        // to 'Please enter valid numbers'.
        
        return;
        // Exits the function early if the input validation fails.
    }
    
    if (num2 === 0) {
        // Checks if 'num2' is equal to 0.
        
        document.getElementById('result').innerText = 'Cannot divide by zero';
        // If the previous condition is true, sets the inner text of the element with the ID 'result'
        // to 'Cannot divide by zero'.
        
        return;
        // Exits the function early if the division by zero is attempted.
    }
    
    const result = num1 / num2;
    // Performs the division of 'num1' by 'num2' and stores the result in the variable 'result'.
    
    document.getElementById('result').innerText = `Result: ${result}`;
    // Sets the inner text of the element with the ID 'result' to display the division result.
});
