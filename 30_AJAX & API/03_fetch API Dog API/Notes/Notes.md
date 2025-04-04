## Fetch API with Dog API

### 1. What is an API?
- API means **Application Programming Interface**.
- It helps one program talk to another.
- Example: Dog API gives us random dog images from the internet.
- We’ll use JavaScript’s **Fetch API** to get this data.

---

### 2. What is Fetch API?
- `fetch()` is used to **get data from the internet**.
- It returns a **Promise**, which means the result will come later.
- Basic example:
  ```javascript
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())  // Convert to JSON
    .then(data => console.log(data.message)); // Show image URL
  ```

---

### 3. Dog API Basics
- Website: [https://dog.ceo/api](https://dog.ceo/api)
- Useful links:
  - Random image: `https://dog.ceo/api/breeds/image/random`
  - All breeds: `https://dog.ceo/api/breeds/list/all`
- Try it:
  ```javascript
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data.message));
  ```

---

### 4. How to Handle Errors
- Sometimes the API might not work (no internet, wrong URL, etc.).
- We can catch errors using `.catch()`.
- Example:
  ```javascript
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(error => console.log('Something went wrong:', error));
  ```

---

### 5. Show Dog Breeds on Webpage
- This shows a list of all dog breeds.
- We use the endpoint: `https://dog.ceo/api/breeds/list/all`
- Example:
  ```javascript
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      const breedList = document.createElement('ul');
      breeds.forEach(breed => {
        const listItem = document.createElement('li');
        listItem.textContent = breed;
        breedList.appendChild(listItem);
      });
      document.body.appendChild(breedList);
    })
    .catch(error => console.log('Error:', error));
  ```

---
