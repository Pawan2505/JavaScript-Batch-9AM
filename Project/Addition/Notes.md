# Project : Sum Calculator

A simple web-based application to calculate the sum of two numbers.

## Project Structure

- **HTML**: The structure of the web page.
- **CSS**: The styling of the web page.
- **JavaScript**: The functionality to calculate the sum.

## HTML File

The HTML file contains the structure of the application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sum Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Sum Calculator</h1>
        <input id="input-num1" type="number" placeholder="Enter First Number">
        <input id="input-num2" type="number" placeholder="Enter Second Number">
        <button class="btn-sum" onclick="calculateSum()">Calculate</button>
        <h2 id="answer"></h2>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS File

The CSS file contains the styling for the application.

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

.btn-sum {
  width: 85%;
  padding: 10px;
  font-size: 24px;
  background-color: blue;
  border-radius: 10px;
}
```

## JavaScript File

The JavaScript file contains the logic to calculate the sum of the two numbers entered by the user.

```javascript
function calculateSum(){
    let num1 = parseInt(document.getElementById('input-num1').value);
    let num2 = parseInt(document.getElementById('input-num2').value);

    let sum = num1 + num2;

    document.getElementById('answer').innerHTML = `<i>Sum : ${sum}</i>`;
}
```

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter two numbers in the input fields.
3. Click the "Calculate" button to see the sum of the two numbers displayed below the button.

## Project Files

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling.
- `script.js`: The JavaScript file for functionality.

## Conclusion

This project demonstrates a basic web application that uses HTML, CSS, and JavaScript to perform a simple arithmetic operation.

