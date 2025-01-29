## JavaScript Basic Calculator Project Notes

#### HTML:
The HTML structure for our basic calculator is straightforward. Here are the key points:
- We have a `DOCTYPE` declaration to specify HTML5.
- The `head` section includes meta tags for character set and viewport settings, and a link to an external CSS file (`style.css`).
- The `body` contains a `div` with a class `container` which houses all elements of the calculator.
- There are two input fields for entering numbers, identified by their IDs `input-num1` and `input-num2`.
- Four buttons trigger different arithmetic operations: Addition, Subtraction, Multiplication, and Division. Each button calls the `calculate` function with a corresponding operation type.
- The `div` with the ID `answer` is used to display the result of the calculation.
- The script source `script.js` is included at the end of the body to connect JavaScript functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="calculate-heading">Basic Calculator</h1>
        <input id="input-num1" type="number" placeholder="Enter First Number">
        <input id="input-num2" type="number" placeholder="Enter Second Number">
        <button onclick="calculate('add')">Addition</button>
        <button onclick="calculate('sub')">Subtract</button>
        <button onclick="calculate('mul')">Multiply</button>
        <button onclick="calculate('divide')">Divide</button>
        <div id="answer"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS:
The CSS styles define the appearance and layout of the calculator:
- `.container`: Defines the main container with dimensions, border, margin, padding, and centered text.
- `.calculate-heading`: Centers the heading text.
- `input`: Styles the input fields with width, padding, margin, font size, and border-radius.
- `button`: Styles the buttons with width, margin, font size, padding, cursor, background color, border-radius, and text color. The `hover` state changes the background color.

```css
.container {
  width: 600px;
  height: 350px;
  border: 2px solid #5a5353f2;
  margin: 100px auto;
  padding: 10px;
  text-align: center;
}

.calculate-heading {
  text-align: center;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px;
  font-size: 24;
  border-radius: 5px;
}

button {
  width: 20%;
  margin: 10px;
  font-size: 24px;
  letter-spacing: 2px;
  padding: 10px;
  cursor: pointer;
  background-color: green;
  border-radius: 10px;
  color: white;
}

button:hover {
  background-color: rgb(8, 63, 8);
}
```

#### JavaScript:
The JavaScript code provides the calculator's functionality :

```javascript
function calculate(exp){ // Function to perform arithmetic operations based on the input

    // Parsing the input values as integers
    let num1 = parseInt(document.getElementById('input-num1').value);
    let num2 = parseInt(document.getElementById('input-num2').value);

    // Selecting the element to display the result
    let result = document.getElementById('answer');
    result.style.fontSize = "40px"; // Setting the font size for the result display

    // Checking if the input values are valid numbers
    if(isNaN(num1) || isNaN(num2)){
        result.innerHTML = `<i> Please enter number! </i>`; // Displaying an error message if inputs are not numbers
    } else {
        // Switch case to handle different operations based on the input parameter 'exp'
        switch(exp){
            case 'add':
                result.innerHTML = `Sum : ${num1 + num2}`; // Displaying the sum
                break;
            case 'sub':
                result.innerHTML = `Subtract : ${num1 - num2}`; // Displaying the difference
                break;
            case 'mul':
                result.innerHTML = `Multiply : ${num1 * num2}`; // Displaying the product
                break;
            case 'divide':
                result.innerHTML = `Divide : ${num1 / num2}`; // Displaying the quotient
                break;
            default:
                result.innerHTML = `Invalid`; // Handling unexpected input
        }
    }
}
```

Key points in JavaScript:
- The `calculate` function takes an operation type as an argument (`exp`).
- Uses `parseInt` to convert input values from strings to integers.
- Checks if the input values are valid numbers using `isNaN`.
- Displays an error message if the input values are not valid numbers.
- Uses a `switch` statement to perform the appropriate arithmetic operation based on the value of `exp`.
- Updates the `innerHTML` of the `answer` element to display the result of the calculation.
