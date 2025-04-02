### **Lecture Notes: Fetching Data from a Corona API using JavaScript**

---

#### **1. What is an API?**
- **API** stands for **Application Programming Interface**.
- It is like a bridge that allows two applications to communicate with each other.
- Example: When you use a weather app, it fetches data from a weather API.
- **Corona API**: Provides real-time data about COVID-19 (cases, deaths, recoveries, etc.).

---

#### **2. What is `fetch()` in JavaScript?**
- `fetch()` is a built-in JavaScript method used to make network requests (like fetching data from an API).
- It returns a **Promise** (a placeholder for data that will be available in the future).
- Syntax:
  ```javascript
  fetch('API_URL')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```
- Steps:
  1. Send a request to the API using `fetch('API_URL')`.
  2. Convert the response to JSON using `.then(response => response.json())`.
  3. Handle the data using `.then(data => console.log(data))`.
  4. Handle errors using `.catch(error => console.error('Error:', error))`.

---

#### **3. Fetching Data from a Corona API**
- **Step 1: Choose a Corona API**
  - Example API: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
  - This API provides global COVID-19 data.

- **Step 2: Write the JavaScript Code**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>COVID-19 Data</title>
  </head>
  <body>
      <h1>COVID-19 Global Data</h1>
      <div id="covid-data"></div>

      <script>
          // Step 1: Fetch data from the API
          fetch('https://disease.sh/v3/covid-19/all')
              .then(response => response.json())
              .then(data => {
                  // Step 2: Display the data on the webpage
                  const covidDataElement = document.getElementById('covid-data');
                  covidDataElement.innerHTML = `
                      <p>Total Cases: ${data.cases}</p>
                      <p>Total Deaths: ${data.deaths}</p>
                      <p>Total Recovered: ${data.recovered}</p>
                  `;
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      </script>
  </body>
  </html>
  ```

- **Step 3: Run the Code**
  - Open the HTML file in a browser.
  - You should see the global COVID-19 data displayed on the webpage.

---

#### **4. Explanation of the Code**
- **HTML Structure:**
  - A simple HTML page with a `<div>` to display the data.
- **JavaScript Code:**
  - `fetch('API_URL')`: Fetches data from the API.
  - `.then(response => response.json())`: Converts the response to JSON.
  - `.then(data => { ... })`: Displays the data in the `<div>`.
  - `.catch(error => { ... })`: Handles any errors that occur during the fetch.

---

---

### **Project:**
1. Create a webpage that fetches and displays COVID-19 data for a specific country (e.g., India).
   - Use this API: [https://disease.sh/v3/covid-19/countries/INDIA](https://disease.sh/v3/covid-19/countries/INDIA)
2. Add a button to refresh the data without reloading the page.

---

### **Note:**
- APIs allow us to fetch real-time data from external sources.
- The `fetch()` method in JavaScript is used to make network requests.
- We can use APIs to build dynamic and data-driven web applications.

---

### **Additional Resources:**
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [COVID-19 API Documentation](https://disease.sh/docs/)

---
