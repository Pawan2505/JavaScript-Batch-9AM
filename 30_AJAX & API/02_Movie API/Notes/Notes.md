### **Lecture Notes: Fetching Data from a Movie API using JavaScript**

---

#### **1. What is a Movie API?**
- **API** stands for **Application Programming Interface**.
- A Movie API provides data about movies, such as titles, release dates, ratings, and more.
- Example: [OMDb API](http://www.omdbapi.com/) or [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).
- **Why use a Movie API?**
  - To build applications like movie search engines, recommendation systems, or movie information websites.

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

#### **3. Fetching Data from a Movie API**
- **Step 1: Choose a Movie API**
  - Example API: [OMDb API](http://www.omdbapi.com/)
  - You need an API key to use this API. Sign up for a free API key [here](http://www.omdbapi.com/apikey.aspx).

- **Step 2: Write the JavaScript Code**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Movie Data</title>
  </head>
  <body>
      <h1>Movie Information</h1>
      <div id="movie-data"></div>

      <script>
          // Step 1: Fetch data from the API
          const apiKey = 'YOUR_API_KEY'; // Replace with your API key
          const movieTitle = 'Inception'; // Example movie title
          fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
              .then(response => response.json())
              .then(data => {
                  // Step 2: Display the data on the webpage
                  const movieDataElement = document.getElementById('movie-data');
                  movieDataElement.innerHTML = `
                      <h2>${data.Title}</h2>
                      <p>Year: ${data.Year}</p>
                      <p>Rated: ${data.Rated}</p>
                      <p>Released: ${data.Released}</p>
                      <p>Plot: ${data.Plot}</p>
                      <img src="${data.Poster}" alt="${data.Title} Poster">
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
  - You should see the movie information displayed on the webpage.

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

#### **5. Hands-On Activity**
- **Task:** Modify the code to fetch and display data for a different movie.
- **Hint:** Change the `movieTitle` variable to another movie name.

---

### **Project:**
1. Create a webpage that fetches and displays data for multiple movies.
   - Use this API: [http://www.omdbapi.com/](http://www.omdbapi.com/)
   - Hint: Use the `s` parameter to search for multiple movies (e.g., `fetch('http://www.omdbapi.com/?s=action&apikey=YOUR_API_KEY')`).
2. Add a search bar to allow users to search for movies by title.

---

### **Note:**
- APIs allow us to fetch real-time data from external sources.
- The `fetch()` method in JavaScript is used to make network requests.
- We can use APIs to build dynamic and data-driven web applications.

---

### **Additional Resources:**
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [OMDb API Documentation](http://www.omdbapi.com/)

---

