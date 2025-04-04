## **AJAX in JavaScript**

---

### **1. What is AJAX?**
- AJAX = **Asynchronous JavaScript and XML**
- It lets websites **get data without reloading** the page  
- Works in the background

---

### **2. Why use AJAX?**
- Faster and smoother websites  
- Only updates the part that needs it  
- Great user experience  
- Used in sites like IRCTC, Swiggy, Flipkart, etc.

---

### **3. How AJAX Works**
1. User does something (click, type, scroll)  
2. JavaScript sends a request  
3. Server sends back data  
4. JavaScript updates the page  

---

### **4. Old Way: XMLHttpRequest**
```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

---

### **5. Modern Way: Fetch API (Better & Easier)**
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
```

✅ **Why use Fetch?**
- Simple and clean  
- Uses **Promises**  
- Easier to manage

---
