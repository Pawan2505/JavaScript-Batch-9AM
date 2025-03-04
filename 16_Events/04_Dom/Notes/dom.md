# Lecture Notes : DOM HTML

## Introduction to the DOM
- **DOM (Document Object Model)** is a programming interface for web documents.
- It represents the page so that programs can change the document structure, style, and content.

## Key Concepts
- **Document**: The web page loaded in the browser.
- **Element**: Individual parts of the document (e.g., a paragraph, an image).
- **Node**: Basic building block of the DOM (can be an element, text, or attribute).

## Accessing the DOM
- **`document` object**: Represents the whole HTML document.
- **Common methods**:
  - `document.getElementById(id)`: Selects an element by its ID.
    ```javascript
    // HTML: <p id="demo">Hello World</p>
    document.getElementById("demo").innerHTML = "Hello DOM!";
    ```
  - `document.getElementsByClassName(className)`: Selects elements by their class name.
    ```javascript
    // HTML: <div class="test">Example</div>
    let elements = document.getElementsByClassName("test");
    console.log(elements[0].innerHTML);
    ```
  - `document.getElementsByTagName(tagName)`: Selects elements by their tag name.
    ```javascript
    // HTML: <p>First</p><p>Second</p>
    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs[1].innerHTML);
    ```
  - `document.querySelector(selector)`: Selects the first element that matches the CSS selector.
    ```javascript
    // HTML: <p class="example">Hello</p>
    let element = document.querySelector(".example");
    console.log(element.innerHTML);
    ```
  - `document.querySelectorAll(selector)`: Selects all elements that match the CSS selector.
    ```javascript
    // HTML: <p class="example">Hello</p><p class="example">World</p>
    let elements = document.querySelectorAll(".example");
    elements.forEach(el => console.log(el.innerHTML));
    ```

## Manipulating the DOM
- **Changing content**:
  - `element.innerHTML = "New Content"`: Sets the HTML content of an element.
    ```javascript
    document.getElementById("demo").innerHTML = "Updated Content!";
    ```
  - `element.textContent = "New Text"`: Sets the text content of an element.
    ```javascript
    document.getElementById("demo").textContent = "Updated Text!";
    ```
- **Changing attributes**:
  - `element.setAttribute(attribute, value)`: Sets the value of an attribute.
    ```javascript
    document.getElementById("demo").setAttribute("class", "newClass");
    ```
  - `element.getAttribute(attribute)`: Gets the value of an attribute.
    ```javascript
    let className = document.getElementById("demo").getAttribute("class");
    console.log(className);
    ```
  - `element.removeAttribute(attribute)`: Removes an attribute.
    ```javascript
    document.getElementById("demo").removeAttribute("class");
    ```
- **Changing styles**:
  - `element.style.property = "value"`: Changes the CSS property of an element.
    ```javascript
    document.getElementById("demo").style.color = "blue";
    ```

## Creating and Removing Elements
- **Creating elements**:
  - `document.createElement(tagName)`: Creates a new element.
    ```javascript
    let newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph.";
    document.getElementById("container").appendChild(newElement);
    ```
- **Removing elements**:
  - `parentElement.removeChild(childElement)`: Removes a child element from its parent.
    ```javascript
    let elementToRemove = document.getElementById("removeMe");
    elementToRemove.parentElement.removeChild(elementToRemove);
    ```

## Event Handling
- **Adding event listeners**:
  - `element.addEventListener(event, function)`: Adds an event listener to an element.
    ```javascript
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked!");
    });
    ```
  - Common events: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, etc.
- **Removing event listeners**:
  - `element.removeEventListener(event, function)`: Removes an event listener from an element.
    ```javascript
    function handleClick() {
        alert("Button was clicked!");
    }
    document.getElementById("myButton").addEventListener("click", handleClick);
    document.getElementById("myButton").removeEventListener("click", handleClick);
    ```

## Practical Examples

### Example 1: Changing Content
```javascript
// HTML: <p id="demo">Hello World</p>
document.getElementById("demo").innerHTML = "Hello DOM!";
```

### Example 2: Changing Styles
```javascript
// HTML: <p id="demo">Hello World</p>
document.getElementById("demo").style.color = "blue";
```

### Example 3: Event Handling
```javascript
// HTML: <button id="myButton">Click Me</button>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
```

### Example 4: Creating and Appending an Element
```javascript
// HTML: <div id="container"></div>
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.getElementById("container").appendChild(newElement);
```

### Example 5: Removing an Element
```javascript
// HTML: <div id="container"><p id="removeMe">Remove this paragraph</p></div>
let elementToRemove = document.getElementById("removeMe");
elementToRemove.parentElement.removeChild(elementToRemove);
```

## Note : 
- The DOM allows you to interact with HTML documents programmatically.
- You can access, manipulate, create, and remove elements in the DOM.
- Event handling is crucial for creating interactive web applications.

## Additional Resources
- For more information, check out this [Medium article by Pawan2505](https://medium.com/@pawan2505/document-object-model-e252c7ab7f45).
