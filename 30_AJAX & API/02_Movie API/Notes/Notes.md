## Fetching Movie Data using JavaScript

### 1. What is a Movie API?
- An API (Application Programming Interface) gives us access to movie data like title, year, rating, etc.
- Example APIs:  
  - [OMDb API](http://www.omdbapi.com/)  
  - [TMDb API](https://www.themoviedb.org/documentation/api)
- Why use it?  
  To build movie search websites or apps.

---

### 2. What is `fetch()` in JavaScript?
- `fetch()` is used to get data from a server or API.
- It works in the background and returns a **Promise**.
- Basic example:
  ```javascript
  fetch('API_URL')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

---

### 3. How to Fetch Movie Data

#### Step 1: Get Your API Key
- Go to [omdbapi.com](http://www.omdbapi.com/) and sign up for a free API key.

#### Step 2: Write the Code
```html
<!DOCTYPE html>
<html>
<head>
  <title>Movie Info</title>
</head>
<body>
  <h1>Movie Information</h1>
  <div id="movie-data"></div>

  <script>
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const movieTitle = 'Inception'; // Any movie title

    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('movie-data').innerHTML = `
          <h2>${data.Title}</h2>
          <p>Year: ${data.Year}</p>
          <p>Rated: ${data.Rated}</p>
          <p>Released: ${data.Released}</p>
          <p>Plot: ${data.Plot}</p>
          <img src="${data.Poster}" alt="Movie Poster">
        `;
      })
      .catch(error => console.error('Error:', error));
  </script>
</body>
</html>
```

#### Step 3: Run It
- Save the file as `.html`.
- Open it in a browser.
- You’ll see movie info for "Inception".

---

### 4. How the Code Works
- We use `fetch()` to call the API.
- `.json()` converts the response into a usable format.
- We show that data on the webpage inside a `<div>`.
- If something goes wrong, `.catch()` shows the error.

---

### 5. Try It Yourself
- Change the `movieTitle` to any movie you like:
  ```javascript
  const movieTitle = 'The Dark Knight';
  ```

---

### Mini Project
- Make a simple webpage that:
  - Searches for movies using the OMDb API
  - Displays multiple results using `s=` (e.g., `?s=batman`)
  - Bonus: Add a search bar for user input

---

### Note:
- `fetch()` helps get live data from APIs.
- OMDb is great for learning and small projects.
- APIs + JavaScript = Dynamic web apps

---
