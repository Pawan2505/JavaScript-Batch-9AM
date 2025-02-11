## Subtract Calculator Project

### HTML Structure
- **File:** `index.html`
- **Description:** This file contains the HTML markup for the subtract calculator. It includes input fields for two numbers, a button to trigger the subtraction operation, and a div to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subtract Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Subtract Calculator</h1>
        <input id="input-num1" type="number" placeholder="Enter First Number">
        <input id="input-num2" type="number" placeholder="Enter Second Number">
        <button class="btn-subtract" onclick="calculateSubtract()">Calculate</button>
        <h2 id="answer"></h2>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling
- **File:** `style.css`
- **Description:** This file contains the CSS styles for the subtract calculator. It styles the container, input fields, button, and result display.

```css
.container {
    width: 500px;
    height: 350px;
    box-shadow: 0px 0px 4px 8px #3e3a3a;
    margin: 100px auto;
    padding: 20px;
    text-align: center;
}

#input-num1,
#input-num2 {
    padding: 10px;
    font-size: 24px;
    width: 80%;
    margin: 10px;
    border-radius: 5px;
}

.btn-subtract {
    width: 85%;
    padding: 10px;
    font-size: 24px;
    background-color: red;
    border-radius: 10px;
}
```

### JavaScript Functionality
- **File:** `script.js`
- **Description:** This file contains the JavaScript code for the subtract calculator. It defines a function to perform the subtraction and update the result.

```javascript
function calculateSubtract(){
    // Defines a function named 'calculateSubtract' to perform the subtraction operation.
    
    let num1 = parseInt(document.getElementById('input-num1').value);
    // Retrieves the value from the input field with the ID 'input-num1', converts it to an integer using 'parseInt',
    // and stores it in the variable 'num1'.
    
    let num2 = parseInt(document.getElementById('input-num2').value);
    // Retrieves the value from the input field with the ID 'input-num2', converts it to an integer using 'parseInt',
    // and stores it in the variable 'num2'.
    
    let result = num1 - num2;
    // Subtracts 'num2' from 'num1' and stores the result in the variable 'result'.
    
    document.getElementById('answer').innerHTML = `<i>Result : ${result}</i>`;
    // Sets the inner HTML of the element with the ID 'answer' to display the subtraction result in italics.
}
