To create the `const apiKey` and `const movieTitle` variables, you need to follow these steps:

---

### **Step 1: Get an API Key**
1. **Sign up for an API Key:**
   - Go to the [OMDb API website](http://www.omdbapi.com/).
   - Click on the **API Key** link or visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).
   - Fill out the form to request a free API key.
   - Check your email for the API key (it may take a few minutes to arrive).

2. **Copy the API Key:**
   - Once you receive the API key in your email, copy it. It will look something like this:
     ```
     1234abcd
     ```

---

### **Step 2: Use the API Key in Your Code**
1. **Replace `'YOUR_API_KEY'` with your actual API key:**
   - In your JavaScript code, replace `'YOUR_API_KEY'` with the API key you received.
   - Example:
     ```javascript
     const apiKey = '1234abcd'; // Replace with your actual API key
     ```

2. **Set the Movie Title:**
   - The `movieTitle` variable is used to specify the movie you want to fetch data for.
   - Example:
     ```javascript
     const movieTitle = 'Inception'; // Example movie title
     ```

---

### **Step 3: Full Code Example**
Here’s how your code will look after replacing the placeholders:

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
        // Step 1: Replace with your API key and movie title
        const apiKey = '1234abcd'; // Replace with your actual API key
        const movieTitle = 'Inception'; // Example movie title

        // Step 2: Fetch data from the API
        fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // Step 3: Display the data on the webpage
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

---

### **Step 4: Run the Code**
1. Save the file with a `.html` extension (e.g., `movie.html`).
2. Open the file in a web browser.
3. You should see the movie information for "Inception" displayed on the webpage.

---

### **Step 5: Try Different Movies**
- To fetch data for a different movie, change the `movieTitle` variable:
  ```javascript
  const movieTitle = 'The Dark Knight'; // Change to another movie title
  ```

---

### **Important Notes:**
- Always keep your API key private. Do not share it publicly or upload it to GitHub.
- If you want to search for multiple movies, use the `s` parameter instead of `t`:
  ```javascript
  fetch(`http://www.omdbapi.com/?s=action&apikey=${apiKey}`)
  ```

---

