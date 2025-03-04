# Lecture Notes : querySelectorAll

## Introduction to querySelectorAll

- **querySelectorAll** is a method used to select all elements that match a specified group of CSS selectors.
- It returns a static NodeList object containing all matching elements.

## Key Concepts

- **CSS Selectors**: Patterns used to select elements in a document. For example, `.class`, `#id`, `element`, `[attribute]`.
- **NodeList**: A collection of DOM nodes, similar to an array but with some differences.

## Syntax

```javascript
document.querySelectorAll(selectors);
```

- `selectors`: One or more CSS selectors to match against the elements in the document.

## Example 1: Basic Usage

```javascript
// HTML: <div class="example">Hello</div><div class="example">World</div>
let elements = document.querySelectorAll(".example");
console.log(elements.length); // Output: 2
```

## Example 2: Iterating Over NodeList

```javascript
// HTML: <div class="example">Hello</div><div class="example">World</div>
let elements = document.querySelectorAll(".example");

elements.forEach(function (element) {
  console.log(element.textContent);
});
// Output: Hello
//         World
```

## Example 3: Combining Selectors

```javascript
// HTML: <div class="example">Hello</div><p class="example">World</p>
let elements = document.querySelectorAll("div.example, p.example");
console.log(elements.length); // Output: 2
```

## Example 4: Selecting Nested Elements

```javascript
// HTML: <div class="container"><span class="nested">Nested</span></div>
let elements = document.querySelectorAll(".container .nested");
console.log(elements.length); // Output: 1
```

## Differences from querySelector

- **querySelector** selects the first matching element, while **querySelectorAll** selects all matching elements.
- **querySelector** returns a single element, while **querySelectorAll** returns a NodeList of elements.

## Concept :

- The `querySelectorAll` method is used to select multiple elements that match specified CSS selectors.
- It returns a static NodeList, which can be iterated over using methods like `forEach`.
- Understanding `querySelectorAll` is essential for manipulating multiple elements in the DOM.

## Note :

- For more detailed information, refer to the [MDN Web Docs on querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).
