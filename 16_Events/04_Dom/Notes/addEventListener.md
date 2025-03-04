# Lecture Notes : addEventListener

## Introduction to addEventListener
- **addEventListener** is a method used to attach an event handler to a specific event on an element.
- It allows multiple event handlers to be added to the same element for the same event type.

## Key Concepts
- **Event**: An action or occurrence that happens in the browser, e.g., a user clicking a button, loading a page, or pressing a key.
- **Event Handler**: A function that runs in response to an event.

## Syntax
```javascript
element.addEventListener(event, function, useCapture);
```
- `event`: The type of event to listen for (e.g., "click", "mouseover").
- `function`: The function to run when the event is triggered.
- `useCapture` (optional): A boolean value that specifies whether the event should be captured in the capturing phase or the bubbling phase.

## Example 1: Basic Usage
```javascript
// HTML: <button id="myButton">Click Me</button>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
```

## Example 2: Adding Multiple Event Listeners
```javascript
// HTML: <button id="myButton">Click Me</button>
let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button was clicked!");
});

button.addEventListener("mouseover", function() {
    console.log("Mouse over the button!");
});
```

## Example 3: Removing Event Listeners
```javascript
// HTML: <button id="myButton">Click Me</button>
function handleClick() {
    alert("Button was clicked!");
}

let button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// Later in the code
button.removeEventListener("click", handleClick);
```

## Event Object
- When an event is triggered, an event object is created and passed to the event handler.
- The event object contains information about the event, such as the target element, type of event, and more.

## Example 4: Accessing the Event Object
```javascript
// HTML: <button id="myButton">Click Me</button>
document.getElementById("myButton").addEventListener("click", function(event) {
    console.log("Event Type: " + event.type);
    console.log("Target Element: " + event.target);
});
```

## Event Propagation
- **Capturing Phase**: The event moves from the root to the target element.
- **Bubbling Phase**: The event moves from the target element back to the root.
- By default, event listeners are registered for the bubbling phase. You can change this by setting the `useCapture` parameter to `true`.

## Example 5: Event Propagation
```javascript
// HTML: <div id="parent"><button id="child">Click Me</button></div>
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked!");
}, true);  // Capturing phase

document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked!");
});
```

## Summary
- The `addEventListener` method is used to attach event handlers to elements.
- It supports multiple event handlers, the use of the event object, and event propagation (capturing and bubbling).
- Understanding `addEventListener` is crucial for building interactive web applications.

## Note : 
- For more detailed information, refer to the [MDN Web Docs on addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
- For more insights on JavaScript events, check out this [Medium article](https://medium.com/@pawan2505/javascript-events-d95fd59b8f62).
