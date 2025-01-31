### Lecture Notes: Salary Calculator Project

#### HTML Structure
- The HTML file creates the structure of the Salary Calculator.
- Key elements include:
  - `input` fields for Gross Salary, DA, HRA, Conveyance, and Other allowances.
  - A `button` to calculate the Basic Salary.
  - A `div` to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <h1 class="salaray-calculate">Salaray Calculator</h1>
        <input type="text" id="input-1" placeholder="Gross Salary">
        <input type="text" id="input-2" placeholder="DA">
        <input type="text" id="input-3" placeholder="HRA">
        <input type="text" id="input-4" placeholder="conveyance">
        <input type="text" id="input-5" placeholder="Other">
        <button id="btn-salary">Basic Salary</button>
        <div id="answer"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS Styling
- The CSS file styles the Salary Calculator to make it visually appealing.
- Key styles include:
  - Centering the calculator on the page.
  - Styling the input fields and button.
  - Adding hover effects to the button.

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
  width: 40%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.salaray-calculate {
  font-size: 40px;
  text-decoration: underline;
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

#### JavaScript Functionality
- The JavaScript file contains the logic to calculate the Basic Salary.
- It listens for a click event on the "Calculate" button, retrieves values from the input fields, and calculates the Basic Salary using the formula:
  - `Basic salary = Gross salary – (DA + HRA + conveyance + other allowances)`

```javascript
// Add an event listener to the button with ID 'btn-salary'
document.getElementById('btn-salary').addEventListener('click', function() {
    // Get the value of the input field with ID 'input-1' and convert it to an integer
    let grossSalary = parseInt(document.getElementById('input-1').value);
    // Get the value of the input field with ID 'input-2' and convert it to an integer
    let da = parseInt(document.getElementById('input-2').value);
    // Get the value of the input field with ID 'input-3' and convert it to an integer
    let hra = parseInt(document.getElementById('input-3').value);
    // Get the value of the input field with ID 'input-4' and convert it to an integer
    let conveyance = parseInt(document.getElementById('input-4').value);
    // Get the value of the input field with ID 'input-5' and convert it to an integer
    let other = parseInt(document.getElementById('input-5').value);

    // Get the element with ID 'answer' to display the result
    let result = document.getElementById('answer');

    // Check if any of the input values are not valid numbers
    if (isNaN(grossSalary) || isNaN(da) || isNaN(hra) || isNaN(conveyance) || isNaN(other)) {
        // If any input is invalid, display an error message
        result.innerHTML = `<i>Check field!</i>`;
    } else {
        // Calculate the basic salary by subtracting DA, HRA, conveyance, and other allowances from the gross salary
        let basicSalary = grossSalary - (da + hra + conveyance + other);
        // Display the calculated basic salary
        result.innerHTML = `Basic Salary: ${basicSalary}`;
    }
});
```

#### Summary:
- **HTML**: Defines the structure and elements of the calculator.
- **CSS**: Provides styling to make the calculator user-friendly.
- **JavaScript**: Implements the functionality to perform the salary calculation based on user inputs.
