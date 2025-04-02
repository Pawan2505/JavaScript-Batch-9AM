## **Lecture Notes: Fetch API with Dog API**

### **1. Introduction**
- **Objective**: Understand what APIs are and how they work.
- **Key Points**:
  - **API** stands for Application Programming Interface. It’s like a messenger that takes requests and returns data.
  - The **Fetch API** is a tool in JavaScript to get data from the internet.
  - The **Dog API** is a fun API that gives us pictures of dogs!

---

### **2. Basics of Fetch API**
- **Objective**: Learn how to use the Fetch API to get data.
- **Key Points**:
  - The Fetch API uses `fetch(url)` to request data from a server.
  - It returns a **Promise**, which is like a placeholder for data that will arrive later.
  - We use `.then()` to handle the data when it arrives.
  - Example:
    ```javascript
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json()) // Convert response to JSON
      .then(data => console.log(data.message)); // Log the dog image URL
    ```

---

### **3. Exploring the Dog API**
- **Objective**: Learn about the Dog API and its endpoints.
- **Key Points**:
  - Dog API URL: `https://dog.ceo/api/`
  - Endpoints:
    - Random dog image: `https://dog.ceo/api/breeds/image/random`
    - List all breeds: `https://dog.ceo/api/breeds/list/all`
  - Example: Fetching a random dog image:
    ```javascript
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => console.log(data.message)); // URL of the dog image
    ```

---

---

### **4. Error Handling**
- **Objective**: Learn how to handle errors when fetching data.
- **Key Points**:
  - Use `.catch()` to handle errors (e.g., no internet connection).
  - Example:
    ```javascript
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Oops! Something went wrong:', error));
    ```

---

### **5. Fetching Dog Breeds**
- **Objective**: Fetch and display a list of dog breeds.
- **Steps**:
  1. Use the endpoint: `https://dog.ceo/api/breeds/list/all`.
  2. Display the list in a `<ul>` element.
  3. Example:
     ```javascript
     fetch('https://dog.ceo/api/breeds/list/all')
       .then(response => response.json())
       .then(data => {
         const breeds = Object.keys(data.message); // Get list of breeds
         const breedList = document.createElement('ul');
         breeds.forEach(breed => {
           const listItem = document.createElement('li');
           listItem.textContent = breed;
           breedList.appendChild(listItem);
         });
         document.body.appendChild(breedList);
       })
       .catch(error => console.error('Error fetching breeds:', error));
     ```

---
