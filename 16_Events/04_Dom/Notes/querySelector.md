# Lecture Notes: querySelector

## Introduction
The `querySelector` method is a powerful feature in JavaScript that allows you to select and manipulate HTML elements based on CSS selectors. It simplifies the process of accessing elements in the DOM (Document Object Model).

## Usage
The syntax for `querySelector` is:
```javascript
let element = document.querySelector(selectors);
```
- `selectors`: A string containing one or more CSS selectors separated by commas.

## Selecting Elements
### By Class Name
```javascript
let element = document.querySelector(".example");
console.log(element.innerHTML);
// Output: Content of the first element with class "example"
```

### By ID
```javascript
let element = document.querySelector("#demo");
console.log(element.innerHTML);
// Output: Content of the element with ID "demo"
```

### By Tag Name
```javascript
let element = document.querySelector("p");
console.log(element.innerHTML);
// Output: Content of the first <p> element
```

### By Attribute
```javascript
let element = document.querySelector("[name='input-name']");
console.log(element.value);
// Output: Value of the input element with name "input-name"
```

## Repository
[CONDITIONAL STATEMENT/Min and Max/script.js](https://github.com/Pawan2505/JavaScript-Code-5PM/blob/80ceba431c51c6b1d432546c05b4bf6514141482/CONDITIONAL%20STATEMENT/Min%20and%20Max/script.js#L1-L35):
```javascript
function findMin(){
    let arr1 = document.querySelector('#input-finder').value.split(',').map(Number);
    let result1 = Math.min(...arr1);
    document.querySelector('#answer').innerHTML = `<i>Minimum Number : </i> ${result1}`;
}

function findMax(){
    let arr2 = document.querySelector('#input-finder').value.split(',').map(Number);
    let result2 = Math.max(...arr2);
    document.querySelector('#answer').innerHTML = `<i>Maximum Number : </i> ${result2}`;
}
```

## Note :
- `querySelector` is a versatile method for selecting DOM elements using CSS selectors.
- It simplifies the process of accessing and manipulating specific elements within the document.
- Practical examples demonstrate its versatility in selecting elements by class, ID, tag name, and attributes.
