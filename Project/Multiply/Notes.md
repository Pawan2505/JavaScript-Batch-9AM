## Multiply Calculator Project

### HTML Structure
- **File:** `index.html`
- **Description:** This file contains the HTML markup for the multiply calculator. It includes input fields for two numbers, a button to trigger the multiplication operation, and a div to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number">
        <button id="multiplyButton">Multiply</button>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling
- **File:** `style.css`
- **Description:** This file contains the CSS styles for the multiply calculator. It styles the body, calculator container, input fields, button, and result display.

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
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

#result {
  width: 80%;
  margin-top: 10px;
  padding: 10px;
  background-color: #e9ecef;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px auto;
}
```

### JavaScript Functionality
- **File:** `script.js`
- **Description:** This file contains the JavaScript code for the multiply calculator. It adds an event listener to the multiply button, retrieves the input values, performs the multiplication, and displays the result.

```javascript
document.getElementById('multiplyButton').addEventListener('click', function() {
    // Adds an event listener to the button with the ID 'multiplyButton'.
    // When the button is clicked, the anonymous function provided as the second argument is executed.
    
    const num1 = parseFloat(document.getElementById('num1').value);
    // Retrieves the value from the input field with the ID 'num1', converts it to a floating-point number,
    // and stores it in the variable 'num1'.
    
    const num2 = parseFloat(document.getElementById('num2').value);
    // Retrieves the value from the input field with the ID 'num2', converts it to a floating-point number,
    // and stores it in the variable 'num2'.
    
    const result = num1 * num2;
    // Multiplies 'num1' by 'num2' and stores the result in the variable 'result'.
    
    document.getElementById('result').innerText = `Result: ${result}`;
    // Sets the inner text of the element with the ID 'result' to display the multiplication result.
});
