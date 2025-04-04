## How to Use `apiKey` and `movieTitle` in JavaScript

### Step 1: Get an API Key
- Go to [omdbapi.com](http://www.omdbapi.com/), click **API Key**.
- Fill out the form to get a **free API key**.
- Check your email for the key (example: `1234abcd`).

---

### Step 2: Add It in Your Code
```javascript
const apiKey = '1234abcd'; // your API key
const movieTitle = 'Inception'; // movie you want to search
```

---

### Step 3: Complete Code Example
```html
<!DOCTYPE html>
<html>
<head><title>Movie Info</title></head>
<body>
  <h1>Movie Info</h1>
  <div id="movie-data"></div>

  <script>
    const apiKey = '1234abcd';
    const movieTitle = 'Inception';

    fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
      .then(res => res.json())
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
      .catch(err => console.error('Error:', err));
  </script>
</body>
</html>
```

---

### Step 4: Try It Out
- Save as `movie.html`.
- Open it in your browser.
- You’ll see the info for "Inception".

---

### Step 5: Search Other Movies
Just change the title:
```javascript
const movieTitle = 'The Dark Knight';
```

---

### Note:
To search a list of movies, use `s` instead of `t`:
```javascript
fetch(`http://www.omdbapi.com/?s=batman&apikey=${apiKey}`)
```

---
