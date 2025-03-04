### JavaScript Lecture Notes: DOM Manipulation and Content Handling in JavaScript


#### **Objective**:
In this Notes we will learn following point:
- Access and manipulate HTML elements using JavaScript.
- Change the appearance and content of elements dynamically.
- Work with attributes and events to create interactive web pages.

---

### **1. Accessing HTML Elements in JavaScript**

In JavaScript, we interact with HTML elements through the **Document Object Model (DOM)**. To start working with an element, we first need to **access** it.

#### **Method: `getElementById()`**

This is the most commonly used method to access an element by its `id`.

```javascript
let element = document.getElementById("elementID");
```

- **Example**:
  ```html
  <h1 id="heading1">Hello World</h1>
  ```

  ```javascript
  let headingElement = document.getElementById("heading1");
  console.log(headingElement);  // Logs the element with id "heading1"
  ```

---

### **2. Modifying Styles of Elements**

One of the common tasks in JavaScript is to manipulate the style of an element. The `.style` property allows us to change CSS properties directly.

#### **a. Setting Individual Style Properties**

```javascript
let h1Element = document.getElementById("heading1");
h1Element.style.backgroundColor = "red";  // Set the background color to red
h1Element.style.color = "white";          // Set the text color to white
```

#### **b. Using `cssText` to Set Multiple Styles at Once**

```javascript
h1Element.style.cssText = "background-color: red; color: white;";
```

This sets multiple styles in one line, which is more efficient when changing multiple styles simultaneously.

---

### **3. Adding and Removing Classes**

Using classes allows for the application of multiple styles to an element. JavaScript provides the `classList` property, which has several useful methods for handling classes.

#### **a. Adding a Class**

```javascript
h1Element.classList.add("highlight");  // Adds the "highlight" class to the element
```

#### **b. Removing a Class**

```javascript
h1Element.classList.remove("highlight");  // Removes the "highlight" class
```

#### **c. Toggling a Class**

This is particularly useful for creating interactive elements, like showing or hiding content.

```javascript
h1Element.classList.toggle("active");  // Adds the "active" class if it's not there, removes it if it is
```

---

### **4. Setting and Removing Attributes**

HTML elements have attributes like `id`, `title`, `class`, etc. We can manipulate these attributes using JavaScript.

#### **a. Setting an Attribute**

```javascript
h1Element.setAttribute("title", "This is a heading");  // Set a title attribute
h1Element.setAttribute("id", "newHeading");            // Set a new id
```

#### **b. Removing an Attribute**

```javascript
h1Element.removeAttribute("class");  // Remove the class attribute
```

#### **c. Getting Attribute Values**

```javascript
let idValue = h1Element.getAttribute("id");  // Get the value of the "id" attribute
console.log(idValue);  // Logs the "id" value
```

---

### **5. Getting All Attribute Names**

You can get all the attribute names of an element using the `getAttributeNames()` method.

```javascript
let attributes = h1Element.getAttributeNames();
console.log(attributes);  // Logs an array of attribute names, like ["id", "class", "title"]
```

---

### **6. Manipulating Element Content**

There are two key properties used to manipulate the content of an element: **`innerHTML`** and **`innerText`**.

#### **a. Using `innerHTML`**

- **What it does**: Allows you to get or set the **HTML content** inside an element. This includes any HTML tags inside the element.

- **Example**:

```javascript
h1Element.innerHTML = "<strong>New Heading</strong>";  // Updates the content with HTML tags
```

- **Getting Content**:

```javascript
console.log(h1Element.innerHTML);  // Logs the HTML content inside the element
```

#### **b. Using `innerText`**

- **What it does**: Allows you to get or set the **plain text** inside an element, without any HTML tags.

- **Example**:

```javascript
h1Element.innerText = "Updated Heading Text";  // Updates only the text, ignoring HTML tags
```

- **Getting Content**:

```javascript
console.log(h1Element.innerText);  // Logs the plain text content inside the element
```

---

### **7. Event Handling in JavaScript**

Event handling is an essential part of making web pages interactive. Using JavaScript, we can respond to user actions like clicks, hover, keypress, etc.

#### **Adding a Click Event Listener**

We can use the `addEventListener()` method to listen for events and define what should happen when those events occur.

```javascript
document.getElementById("btnToggle").addEventListener("click", function () {
  let h1Element = document.getElementById("heading1");
  h1Element.classList.toggle("highlight");  // Toggles the class "highlight" when the button is clicked
});
```

In this example, when the button with the id `btnToggle` is clicked, the class `highlight` is toggled on the `h1` element.

---

### **8. Checking if an Attribute Exists**

Sometimes you may need to check whether an element has a certain attribute. This can be done using `hasAttribute()`.

```javascript
if (h1Element.hasAttribute("id")) {
  console.log("Attribute exists");
} else {
  console.log("Attribute does not exist");
}
```

This checks whether the `id` attribute exists on the element and logs the appropriate message.



### **Note:**

1. **Accessing Elements**: Use `document.getElementById()` to access HTML elements by their ID.
2. **Styling Elements**: Use `.style` for inline styles and `cssText` to set multiple styles at once.
3. **Adding and Removing Classes**: Use `classList.add()`, `classList.remove()`, and `classList.toggle()` to work with element classes.
4. **Manipulating Attributes**: Use `setAttribute()`, `removeAttribute()`, and `getAttribute()` to manipulate HTML attributes.
5. **Content Manipulation**: Use `innerHTML` for HTML content and `innerText` for plain text.
6. **Event Handling**: Use `addEventListener()` to handle user interactions like clicks.
7. **Checking Attributes**: Use `hasAttribute()` to check if an element has a specific attribute.

---




