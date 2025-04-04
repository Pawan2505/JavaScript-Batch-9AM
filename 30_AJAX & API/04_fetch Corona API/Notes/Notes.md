## **Corona API + Fetch in JS**

---

### **1. What’s an API?**
- API = a tool that gives us data.
- Think of it like a waiter – you ask for something, it brings it back.
- **Corona API** gives live COVID-19 stats.

---

### **2. What’s `fetch()`?**
- It’s a way to get data from an API using JavaScript.
- It works with **Promises** (data that arrives later).
- Example:
  ```javascript
  fetch('API_URL')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error:', err));
  ```

---

### **3. Show Global COVID Data**
- API link: `https://disease.sh/v3/covid-19/all`
- Sample code:
  ```html
  <div id="data"></div>

  <script>
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        document.getElementById('data').innerHTML = `
          <p>Cases: ${data.cases}</p>
          <p>Deaths: ${data.deaths}</p>
          <p>Recovered: ${data.recovered}</p>
        `;
      })
      .catch(err => console.log('Error:', err));
  </script>
  ```

---

### **4. What’s Happening in the Code?**
- `fetch()` → gets the data.
- `.then()` → turns it into usable info.
- `.catch()` → shows errors if something breaks.
- The data is shown inside a `<div>`.

---

### **5. Quick Project Idea**
- Show COVID data for India:  
  `https://disease.sh/v3/covid-19/countries/India`
- Add a **"Refresh" button** to update without reloading.

---

### **Note:**
- APIs give real-time info.
- `fetch()` helps you grab and use that data.
- Great for making dynamic websites.

---
