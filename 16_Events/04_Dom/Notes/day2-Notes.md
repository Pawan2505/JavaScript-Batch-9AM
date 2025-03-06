### Lecture Notes: Manipulating DOM Elements in JavaScript

---

- Access DOM elements using `getElementsByTagName()`
- Modify element properties such as `innerText`
- Understand the behavior of these DOM manipulation techniques in real-world scenarios.

---

### 1. **Introduction to DOM Manipulation**

The Document Object Model (DOM) represents the structure of an HTML document as a tree of objects. JavaScript provides various methods to interact with this structure, enabling dynamic changes to the content of a web page.

---

### 2. **`getElementsByTagName()` Method**

- The `getElementsByTagName()` method is used to access all elements of a specific tag name in the DOM.

```javascript
let elements = document.getElementsByTagName('p');
```

In this example, `elements` will be an HTMLCollection of all `<p>` elements in the document.

---

### 3. **Accessing Specific Elements from the Collection**

`getElementsByTagName()` returns a collection, so you need to use an index to access specific elements. Collections are **zero-indexed**.

```javascript
let firstParagraph = document.getElementsByTagName('p')[0];
let secondParagraph = document.getElementsByTagName('p')[1];
```

Here, `firstParagraph` will represent the first `<p>` element, and `secondParagraph` will represent the second `<p>` element.

---

### 4. **Modifying the `innerText` Property**

The `innerText` property allows you to get or set the visible text content of an element.

- **Get Text**: You can retrieve the current text content of an element.
- **Set Text**: You can change the content of an element by assigning a new value to `innerText`.

#### Example:

```javascript
let p1 = document.getElementsByTagName('p')[0].innerText = "aa ja bhai";
```

This line does two things:
1. **Access the first `<p>` element** in the document (`[0]` index).
2. **Sets the text** of the first `<p>` element to `"aa ja bhai"`.

#### Key Notes:
- The assignment `innerText = "aa ja bhai"` directly changes the text content of the first `<p>` element in the HTML.

---

### 5. **Logging the `innerText` of Another Element**

You can access the `innerText` of any element by referencing it directly:

```javascript
let p2 = document.getElementsByTagName('p')[1];
console.log(p2.innerText);
```

This code:
1. **Accesses the second `<p>` element** (index `[1]`).
2. **Logs the text content** of that `<p>` element using `console.log()`.

---

### 6. **Complete Code Example**

```javascript
// Change text content of the first <p> element
let p1 = document.getElementsByTagName('p')[0].innerText = "aa ja bhai";

// Access the second <p> element
let p2 = document.getElementsByTagName('p')[1];

// Log the text content of the second <p> element
console.log(p2.innerText);
```

In this example:
- The text of the first `<p>` element is updated.
- The text of the second `<p>` element is logged to the console.

#### Expected Output:
- The first `<p>` element will now display "aa ja bhai".
- The second `<p>` element's current text will be displayed in the console.

---

### 7. **Note:**

In this Notes, you have learned how to:
- Use `getElementsByTagName()` to select elements.
- Access specific elements in a collection.
- Modify the `innerText` property to change the content of elements.

